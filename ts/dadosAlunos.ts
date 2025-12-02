interface Aluno {
  nome: string;
  notas: Array<number>;
  media?: number;
}

export let alunos: Aluno[] = [
  { nome: "Daniel", notas: [10, 3, 7.5, 20] },
  { nome: "Maria", notas: [10, 9, 3] },
  { nome: "João", notas: [10, 4.5, 1, 3.5] },
  { nome: "Joana", notas: [1, 3, 9] },
  { nome: "José", notas: [10, 4.5] },
  { nome: "Arnaldo", notas: [10, 7, 3] },
  { nome: "Lucas", notas: [4.5, 9, 8, 3] },
  { nome: "Luana", notas: [3, 7, 9, 3] },
  { nome: "Beatriz", notas: [-10, 4, 7, 9] },
  { nome: "Sergio", notas: [4.5, 9.5, 10, 2] },
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
