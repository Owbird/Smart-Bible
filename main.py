from txtai.embeddings import Embeddings
from json import load, dumps

print("Initing")

embeddings = Embeddings({"path": "sentence-transformers/nli-mpnet-base-v2"})

print("embedding set up")

index = {}

data = []

for version in ["kjv", "bbe"]:

    print(f"Loading {version}")

    with open(f"data/{version}.json") as file:
        content = load(file)

        for book in content:

            for chapter_index, chapter in enumerate(book['chapters'], start=1):

                for verse_index, verse in enumerate(chapter, start=1):

                    verse_id = f"{book['name']} {chapter_index}:{verse_index}_kjv"

                    data.append((verse_id, f"{verse_id} {verse}", None))
                    index[verse_id] = verse
                    print(verse_id)

print("Indexing")
embeddings.index(data)

print("saving")
embeddings.save("index.tar.gz")

with open("server/index.json", "w") as index_file:

    index_file.write(dumps(index, indent=4))
