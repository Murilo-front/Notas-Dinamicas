from controles.connect import conectar

def atualizarAluno(id, aluno):
    conexao = conectar()
    
    nome = aluno.nomeAluno
    nota1 = aluno.nota1
    nota2 = aluno.nota2
    nota3 = aluno.nota3
    nota4 = aluno.nota4
    media = aluno.media
       
    cursor = conexao.cursor()
    print(aluno, id)
    cursor.execute(
            """
            UPDATE alunos
            SET nome = ?, nota1 = ?, nota2 = ?, nota3 = ?, nota4 = ?, media = ?
            WHERE id = ?
            """,
            (nome, nota1, nota2, nota3, nota4, media, id)
        )
    
    conexao.commit()
    conexao.close()