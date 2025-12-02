interface Aluno {
  nome: string;
  notas: Array<number>;
  media?: number;
}

// Classe que cria alunos com suas notas
class InfoAlunos {
  constructor(private nome: string, private notas: Array<number>) {}

  get alunoNotas() {
    return { nome: this.nome, notas: this.notas };
  }
}

// Cria o aluno com as informações de notas e reotrna objeto com as informações
function criaAluno(nome: string, notas: Array<number>): Aluno {
  let aluno = new InfoAlunos(nome, notas);
  return aluno.alunoNotas;
}

export let alunos: Aluno[] = [
  criaAluno("Daniel", [10, 3, 7.5, 20]),
  criaAluno("Maria", [10, 9, 3]),
  criaAluno("João", [10, 4.5, 1, 3.5]),
  criaAluno("Joana", [1, 3, 9]),
  criaAluno("José", [10, 4.5]),
  criaAluno("Arnaldo", [10, 7, 3]),
  criaAluno("Lucas", [4.5, 9, 8, 3]),
  criaAluno("Luana", [3, 7, 9, 3]),
  criaAluno("Beatriz", [-10, 4, 7, 9]),
  criaAluno("Sergio", [4.5, 9.5, 10, 2]),
];

let diferenca: number;
let contadorNotas: number;
let contadorNotasSucessor: number;
let contadorNotasAntecessor: number;

//Cria loop que percorre cada aluno dentro do array em ordem cescente
for (let i = 0; i < alunos.length; i++) {
  //Cria loop que seleciona todos os alunos sucessores do primeiro seelcionado
  for (let j = i + 1; j < alunos.length; j++) {
    // Conta e faz a diferença entre a quantidade de notas do primeiro aluno selecionado e seus sucessores
    contadorNotas = alunos[i]!["notas"].length;
    contadorNotasSucessor = alunos[j]!["notas"].length;
    diferenca = contadorNotasSucessor - contadorNotas;
    // Se diferença maior do 0, acrescenta zero como nota do primeiro aluno e remove um da diferença
    while (diferenca > 0) {
      alunos[i]!["notas"].push(0);
      diferenca--;
    }
    diferenca = 0;
  }
}

// Cria loop que percorre todos os alunos dentro do array em ordem decrescente
for (let i = alunos.length - 1; i >= 0; i--) {
  // Cria loop que seleciona todos os alunos antecessores do primeiro selecionado
  for (let j = i - 1; j >= 0; j--) {
    // Conta e faz a diferença entre a quantidade de notas do primeiro aluno selecionado e seus antecessores
    contadorNotas = alunos[i]!["notas"].length;
    contadorNotasAntecessor = alunos[j]!["notas"].length;
    diferenca = contadorNotasAntecessor - contadorNotas;
    // Se diferença maior do 0, acrescenta zero como nota do primeiro aluno e remove um da diferença
    while (diferenca > 0) {
      alunos[i]!["notas"].push(0);
      diferenca--;
    }
    diferenca = 0;
  }
}
