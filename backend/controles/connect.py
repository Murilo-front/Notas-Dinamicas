import sqlite3
import sys
from pathlib import Path


if getattr(sys, "frozen", False):
    # Rodando como .exe
    PASTA_BASE = Path(sys.executable).parent.parent
else:
    # Rodando normalmente com Python
    PASTA_BASE = Path(__file__).resolve().parent


CAMINHO_BANCO = PASTA_BASE / "banco" / "notas.db"


def conectar():
    print("Caminho do banco:", CAMINHO_BANCO)
    print("Banco existe:", CAMINHO_BANCO.exists())

    return sqlite3.connect(CAMINHO_BANCO)