from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from controles.adicionarAluno import adicionarDados, adicionarAluno
from controles.buscarAlunos import buscarTodosALunos
from controles.deletarAlunos import deletarTodosAlunos, deletarAluno
from controles.atualizarAlunos import atualizarAluno

app = FastAPI()

# Permissões das rotas
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de dados recebidos
class DadosPost(BaseModel):
     nomeAluno: str
     nota1: float | str
     nota2: float | str
     nota3: float | str
     nota4: float | str
     media: float | str

# Configuração das rotas
@app.get("/")
def home():
    return {"mensagem": "Backend funcionando!"}

@app.post("/dados")
def adicionar_dados(alunos: list[DadosPost]):
    adicionarDados(alunos)
    return{
        "sucesso": True,
        "quantidade": len(alunos)
    }

@app.post("/dados/aluno")
def adicionar_aluno(aluno: DadosPost):
    adicionarAluno(aluno)
    return{
        "sucesso": True
    }
    

@app.get("/dados")
def retornar_dados():
    dados = buscarTodosALunos()
    return{
            "sucesso": True,
            "dados": dados
        }

@app.delete("/dados")
def excluir_dados():
    deletarTodosAlunos()
    return{
            "sucesso": True
        }

@app.delete("/dados/{id}")
def excluir_aluno(id: int):
    deletarAluno(id)
    return{
            "sucesso": True,
        }

@app.patch("/dados/{id}")
def alterar_aluno(id: int, aluno: DadosPost):
    atualizarAluno(id, aluno)
    return{
                "sucesso": True,
                "content": aluno
        }
