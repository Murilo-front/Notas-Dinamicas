let valores = 0;
let converteNum = 0;
let somaConverteNum = 0;
let contador = 0;
let selecionaAluno = 0;
let media = 0;
let temNotaInvalida = false;
let tbody = document.querySelector("#tbody");

// Cria função que calcula a media e arredonda para duas cassas decimais o resultado
// Recebe soma total e o array, como parametros
function avarege(valorTotal, array) {
  let resultado = valorTotal / array.length;
  return parseFloat(resultado.toFixed(2));
}

// Cria loop que percorre cada um dos alunos aplicando uma função aos mesmos
alunos.forEach((aluno) => {
  somaConverteNum = 0;
  //cria uma tr, com id unico, para cada aluno e seleciona os mesmos
  let adcionaAluno = document.createElement("tr");
  adcionaAluno.id = `aluno${contador}`;
  tbody.appendChild(adcionaAluno);
  selecionaAluno = document.getElementById(`aluno${contador}`);
  // Cria loop que seleciona todas as propriedades de cada objeto "aluno" pressente no array de "alunos"
  for (prop in aluno) {
    valores = aluno[prop];
    // Filtra apenas os valores que tem o tipo objeto, no nosso caso apenas as notas
    if (typeof valores == "object") {
      // Utiliza metodo reduce para armazenar e fazer a soma das notas de cada aluno
      somaConverteNum = valores.reduce((somaTotal, valorAtual) => {
        // Converte o valor atual para número
        converteNum = parseFloat(valorAtual);
        // Filtra apenas os valores de nota invalidos: Abaixo de zero e acima de 10 e que não são numeros
        if (converteNum > 10 || converteNum < 0 || isNaN(converteNum)) {
          // Apresenta mensgaem de erro indicando a nota e o aluno e indica pela variavel que tem notas invalidas
          console.log(
            `Nota ${valorAtual} do aluno/a ${aluno.nome} desconsiderada e substituida por 0, insira apenas notas entre 0 e 10`
          );
          temNotaInvalida = true;
          // Seleciona o indice da nota invalida e substitui o valor no array de notas original do aluno
          let notaInvalida = aluno.notas.findIndex(
            (nota) => nota === valorAtual
          );
          aluno.notas[notaInvalida] = 0;
          // Indica que o valor selecionado pelo reduce é zero
          valorAtual = 0;
        }
        // Faz a soma dos valores e retorna como resultado o mesmo
        somaTotal += valorAtual;
        return somaTotal;
      }, 0);
      // Aplica os valores na função para calcular a média
      // (passamos "valores" como array, pois ao selecionar a própridades notas ele vem como um)
      media = avarege(somaConverteNum, valores);
      // Usa função map para percorrer a propriedades notas em cada aluno e adcionar-los de maneira separada
      selecionaAluno.innerHTML += aluno.notas
        .map(
          (nota) => `<td>
        ${nota}
        </td>`
        )
        .join("");
    } else {
      // Adcionona demais elementos como uma td
      let adcionaNome = document.createElement("td");
      selecionaAluno.appendChild(adcionaNome);
      adcionaNome.textContent = `${valores}`;
    }
  }
  // Adiona a media no objeto "aluno" e adiciona o mesmo como uma td na tabela
  aluno.media = media;
  let adcionaMedia = document.createElement("td");
  selecionaAluno.appendChild(adcionaMedia);
  adcionaMedia.textContent = `${aluno.media}`;
  contador++;
});

// Função autoinvocável que apresenta alerta de mensagem de erro caso tenha notas invalidas
(function () {
  if (temNotaInvalida == true) {
    alert("Você inseriu notas invalidas, confira o console log");
  }
})();
