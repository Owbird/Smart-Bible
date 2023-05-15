from txtai.embeddings import Embeddings
from json import load, dumps
from transformers import pipeline

from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

import uvicorn

embeddings = Embeddings({"path": "sentence-transformers/nli-mpnet-base-v2"})

qa_pipeline = pipeline(
    "question-answering",
    model="csarron/bert-base-uncased-squad-v1",
    tokenizer="csarron/bert-base-uncased-squad-v1"
)

with open("index.json") as index_file:

    index = load(index_file)

embeddings.load("../data/index.tar.gz")

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"from_God": "I Love You!"}


@app.post("/search")
def read_item(q: str = Query(description="Search query")):

    return_data = {}

    verses = embeddings.search(q, 10)

    top = "".join([index[verse[0]] for verse in verses])

    print(top)

    predictions = qa_pipeline({
        'context': top,
        'question': q
    })

    return_data['answer'] = None

    if round(predictions['score'], 3) >= 0.03:
        return_data['answer'] = predictions['answer']

    print(predictions['answer'], round(predictions['score'], 3))

    formated_verses = []

    for verse in verses:

        verse_id = verse[0]

        formated_verses.append(
            {
                "verse_id": verse_id.split("_")[0],
                "version": verse_id.split("_")[1],
                "verse": index[verse_id],
                "strength": verse[1]
            }
        )

    return_data['verses'] = formated_verses

    return return_data


if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)
