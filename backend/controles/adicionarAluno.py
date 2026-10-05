from controles.connect import conectar

def adicionarDados(alunos):
    conexao = conectar()

    for aluno in alunos:
            nome = aluno.nomeAluno
            nota1 = aluno.nota1
            nota2 = aluno.nota2
            nota3 = aluno.nota3
            nota4 = aluno.nota4
            media = aluno.media

            cursor = conexao.cursor()

            cursor.execute(
                "INSERT INTO alunos (nome, nota1, nota2, nota3, nota4, media) VALUES (?, ?, ?, ?, ?, ?)",
                (nome, nota1, nota2, nota3, nota4, media)
            )

    conexao.commit()
    conexao.close()

def adicionarAluno(aluno):
      conexao = conectar()

      nome = aluno.nomeAluno
      nota1 = aluno.nota1
      nota2 = aluno.nota2
      nota3 = aluno.nota3
      nota4 = aluno.nota4
      media = aluno.media

      cursor = conexao.cursor()
      
      cursor.execute(
            "INSERT INTO alunos (nome, nota1, nota2, nota3, nota4, media) VALUES (?, ?, ?, ?, ?, ?)",
            (nome, nota1, nota2, nota3, nota4, media)
        )

      conexao.commit()
      conexao.close()