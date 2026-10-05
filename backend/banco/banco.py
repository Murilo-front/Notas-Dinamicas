import sqlite3

conexao = sqlite3.connect("notas.db")

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
conexao.close()