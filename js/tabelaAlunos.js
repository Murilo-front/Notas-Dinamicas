import { alunos } from "./dadosAlunos.js";
const tbody = document.querySelector("#tbody");
let converteNum;
let somaConverteNum;
let contador = 0;
let media;
let temNotaInvalida = false;
function avarege(valorTotal, array) {
    let resultado = valorTotal / array.length;
    return parseFloat(resultado.toFixed(2));
}
alunos.forEach((aluno) => {
    somaConverteNum = 0;
    //cria uma tr, com id unico, para cada aluno e seleciona os mesmos
    let adcionaAluno = document.createElement("tr");
    adcionaAluno.id = `aluno${contador}`;
    tbody.appendChild(adcionaAluno);
    let selecionaAluno = document.getElementById(`aluno${contador}`);
    for (const prop in aluno) {
        // Cria variavel que é a chave de cada objeto aluno
        const chave = prop;
        let valores = aluno[chave];
        if (typeof valores == "object") {
            somaConverteNum = valores.reduce((somaTotal, valorAtual) => {
                converteNum = parseFloat(valorAtual.toFixed(2));
                // Filtra apenas os valores de nota invalidos: Abaixo de zero e acima de 10
                if (converteNum > 10 || converteNum < 0) {
                    console.log(`Nota ${valorAtual} do aluno/a ${aluno.nome} desconsiderada e substituida por 0, insira apenas notas entre 0 e 10`);
                    temNotaInvalida = true;
                    // Seleciona o indice da nota invalida e substitui o valor no array de notas original do aluno
                    let notaInvalida = aluno.notas.findIndex((nota) => nota === valorAtual);
                    aluno.notas[notaInvalida] = 0;
                    // Indica que o valor selecionado pelo reduce é zero
                    valorAtual = 0;
                }
                somaTotal += valorAtual;
                return somaTotal;
            }, 0);
            media = avarege(somaConverteNum, valores);
            // Usa função map para percorrer a propriedades notas em cada aluno e adcionar-los de maneira separada
            selecionaAluno.innerHTML += aluno.notas
                .map((nota) => `<td>
        ${nota}
        </td>`)
                .join("");
        }
        else {
            // Adcionona demais elementos como uma td
            let adcionaNome = document.createElement("td");
            selecionaAluno?.appendChild(adcionaNome);
            adcionaNome.textContent = `${valores}`;
        }
    }
    // Adiona a media no objeto "aluno" e adiciona o mesmo como uma td na tabela
    aluno.media = media;
    let adcionaMedia = document.createElement("td");
    selecionaAluno?.appendChild(adcionaMedia);
    adcionaMedia.textContent = `${aluno.media}`;
    contador++;
});
// Função autoinvocável que apresenta alerta de mensagem de erro caso tenha notas invalidas
// (function (): void {
//   if (temNotaInvalida) {
//     alert("Você inseriu notas invalidas, confira o console log");
//   }
// })();
//# sourceMappingURL=tabelaAlunos.js.map