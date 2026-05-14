# Backend

This is the FastAPI backend for ResumeAI.

## What you need
- Python 3.10+
- Ollama installed locally
- A model pulled in Ollama (for example, `llama3`)
- if you dont have a model, you can pull one using `ollama pull llama3` (or replace `llama3` with your preferred model)

- Note (System Requirements for llama3 8B)
  - Minimum: 8GB RAM, 4GB VRAM
  - Recommended: 16GB RAM, 6GB VRAM

## Run it locally
1. Open a terminal in the `backend` folder.
2. Create a virtual environment:
   - Windows: `python -m venv env`
   - macOS/Linux: `python -m venv env`
3. Activate it:
   - Windows PowerShell: `env\Scripts\Activate.ps1`
   - macOS/Linux: `source env/bin/activate`
4. Install dependencies:
   - `pip install -r requirements.txt`
5. Start the API:
   - `uvicorn main:app --reload`

The server runs at `http://127.0.0.1:8000`.

## Notes
If you use a different Ollama model than `llama3`, update the model name in the backend code.
