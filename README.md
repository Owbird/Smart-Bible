# Smart-Bible

This is a Bible search engine built using `txtai`, `sentence-transformers/nli-mpnet-base-v2`, FastAPI, and Next.js. It allows users to search passages from the Bible and retrieve relevant results quickly or answer the question if possible.

## Features

- **Verse Search**: Users can search for specific Bible verses using keywords, phrases, or references.
- **Contextual Similarity**: The search engine leverages the power of `sentence-transformers/nli-mpnet-base-v2` to understand the contextual similarity of verses and passages.
- **Web Interface**: The search engine comes with a user-friendly web interface built using Next.js, allowing users to search for Bible references easily.

## Requirements

- Python 3.7 or higher
- `txtai` library
- `sentence-transformers` library
- FastAPI
- Next.js

## Project Structure

The project consists of the following components:

- `main.py`: The main script for generating the Bible index.
- `server/`: The FastAPI server to handle client requests.
- `client/`: The Next.js frontend UI code.

The project structure looks as follows:

```plaintext
smart-bible/
├── main.py
├── server/
└── client/
```

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/bible-search-engine.git
   ```

2. Install the required index dependencies:

   ```shell
   pip install requirements.txt
   ```

3. Install the required server dependencies:

   ```shell
   cd server
   pip install requirements.txt
   ```

4. Install the required client dependencies:

   ```shell
   cd client
   npm install
   ```

## Contributions

Contributions to this project are welcome! If you have any ideas, feature requests, or bug reports, please open an issue or submit a pull request on the GitHub repository.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it according to your needs.

## Acknowledgments

Smart-Bible was built with the help of the following libraries and frameworks:

- `txtai`: [https://github.com/neuml/txtai](https://github.com/neuml/txtai)
- `sentence-transformers`: [https://www.sbert.net](https://www.sbert.net)
- FastAPI: [https://fastapi.tiangolo.com](https://fastapi.tiangolo.com)
- Next.js: [https://nextjs.org](https://nextjs.org)
