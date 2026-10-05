from controles.connect import conectar
import sqlite3

def buscarTodosALunos():
    conexao = conectar()
    conexao.row_factory = sqlite3.Row

    cursor = conexao.cursor()
    cursor.execute(
        "SELECT * FROM alunos"
    )

    dados = [dict(dado) for dado in cursor.fetchall()]

    conexao.commit()
    conexao.close()

    return dados
