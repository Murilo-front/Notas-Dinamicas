from controles.connect import conectar

def deletarTodosAlunos():
    conexao = conectar()

    cursor = conexao.cursor()
    cursor.execute(
            "DELETE FROM alunos"
        )
    # Seta id em 1 novamente
    cursor.execute("DELETE FROM sqlite_sequence WHERE name = 'alunos'")

    conexao.commit()
    conexao.close()

def deletarAluno(id):
    conexao = conectar()
    
    cursor = conexao.cursor()
    cursor.execute(
            "DELETE FROM alunos where id= ?", (id,)
        )
    
    conexao.commit()
    conexao.close()