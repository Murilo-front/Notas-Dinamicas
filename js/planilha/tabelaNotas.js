import { selects } from "./optionsPlanilha.js";
const tbody = document.querySelector("#tbody");
export function rowFacture(dados) {
    selects.forEach((select) => {
        let contador = 0;
        dados.forEach((dado) => {
            if (select.id === "nomeAluno") {
                //cria uma tr, com id unico, para cada aluno e seleciona os mesmos
                let adcionaAluno = document.createElement("tr");
                adcionaAluno.id = `aluno${contador}`;
                tbody.appendChild(adcionaAluno);
            }
            let selecionaAluno = document.getElementById(`aluno${contador++}`);
            let alunoCell = document.createElement("td");
            let alunoInfo = dado?.[select.value];
            if (select.id !== "nomeAluno" && select.id !== "media" && !alunoInfo) {
                alunoInfo = 0;
            }
            alunoCell.textContent = `${alunoInfo}`;
            selecionaAluno?.appendChild(alunoCell);
        });
    });
    return;
}
//# sourceMappingURL=tabelaNotas.js.map