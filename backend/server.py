from main import app
import uvicorn

# Permite executavel iniciar servidor sem as dependencias instaladas
if __name__ == "__main__":
    uvicorn.run(
        app,
        host="127.0.0.1",
        port=8000
    )