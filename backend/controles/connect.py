import sqlite3
import sys
import os
from pathlib import Path


if getattr(sys, "frozen", False):
    PASTA_BASE = Path(os.environ["LOCALAPPDATA"]) / "ProjetoNotas"
else:
    PASTA_BASE = Path(__file__).resolve().parent


PASTA_BANCO = PASTA_BASE / "banco"
CAMINHO_BANCO = PASTA_BANCO / "notas.db"

PASTA_BANCO.mkdir(parents=True, exist_ok=True)


def conectar():
    conexao = sqlite3.connect(CAMINHO_BANCO)

    cursor = conexao.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS alunos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            nota1 REAL,
            nota2 REAL,
            nota3 REAL,
            nota4 REAL,
            media REAL
        )
    """)

    conexao.commit()

    return conexao