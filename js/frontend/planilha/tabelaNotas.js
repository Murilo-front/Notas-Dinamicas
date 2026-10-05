import { DOM } from "../shared/dom.js";
import { alterarInputRow } from "./alterarPlanilha/alterarInputs.js";
class NovoAluno {
    chave;
    info;
    id;
    constructor(chave, info, id) {
        this.chave = chave;
        this.info = info;
        this.id = id;
    }
    getAluno() {
        return { [this.chave]: this.info };
    }
    getAlunoInfo() {
        return this.info;
    }
    criaTr() {
        let tr = document.createElement("tr");
        tr.id = `aluno${this.id}`;
        DOM.tbody.appendChild(tr);
        return tr;
    }
    criaTd() {
        const td = document.createElement("td");
        td.textContent = `${this.info}`;
        return td;
    }
    addAlterarIcons(td) {
        const iconPath = "/public/icomoon/PNG";
        const icons = `<div class="alteracaoBtns alterarIcons" data-id="${this.id}">
              <div class="alterarOptionsIcons iconsContainer">
                <img src="${iconPath}/pencil2.png" data-operacao="alterar" alt="lapisIcon" />
                <img src="${iconPath}/bin2.png" data-operacao="excluir" alt="trashIcon">
               
              </div>
              <div class="alterarConfirmIcons iconsContainer" style="display: none">
                <img src="${iconPath}/checkmark.png" data-operacao="confirmar" alt="confirmIcon"/>
                <img src="${iconPath}/cross.png" data-operacao="cancelar" alt="cancelIcon">
              </div>
            </div>`;
        td.innerHTML += icons;
        return;
    }
}
// Adiciona as informações na tabela e formata os dados
// Recebe dados DIRETO da planilha
export function rowFacture(dados, semCabecalho) {
    // Array de alunos que formata os dados e envia para o fetch
    const arrayAlunos = [];
    // Verifica se já tem info no DOM e seta como valor do contador
    const lastTr = DOM.tbody.lastElementChild;
    const nextId = lastTr ? Number(lastTr.id.match(/\d+/)?.[0]) + 1 : 0;
    DOM.selects.forEach((select) => {
        let contador = nextId;
        let arrayContador = 0;
        const selectId = select.id;
        // Seleciona as informações validando se tem cabeçalho ou não
        dados.forEach((dado) => {
            let alunoInfo = semCabecalho
                ? dado[Number(select.value)]
                : dado[select.value];
            if (selectId === "nomeAluno") {
                if (!alunoInfo) {
                    throw new Error("Não é possivel adicionar as notas sem a identificação dos alunos");
                }
                else if (!isNaN(parseFloat(alunoInfo))) {
                    throw new Error("O campo de nomes, deve ser preenchido com texto");
                }
                //cria uma tr, com id unico, para cada nome de aluno
                const adcionaAluno = new NovoAluno(selectId, alunoInfo, contador);
                const objetoAluno = adcionaAluno.getAluno();
                const trAluno = adcionaAluno.criaTr();
                const tdAluno = adcionaAluno.criaTd();
                trAluno.appendChild(tdAluno);
                arrayAlunos.push(objetoAluno);
            }
            let selecionaAluno = document.getElementById(`aluno${contador}`);
            // Adiciona 0 as colunas sem nota
            if (selectId !== "nomeAluno" && selectId !== "media") {
                if (!alunoInfo) {
                    alunoInfo = 0;
                }
                else if (isNaN(parseFloat(alunoInfo))) {
                    throw new Error("Os campos de notas devem ser preenchidos com numeros");
                }
            }
            // Se não tem média, realiza o calculo
            if (selectId == "media") {
                if (isNaN(parseFloat(alunoInfo))) {
                    const media = Number(calculaMedia(contador).toFixed(2));
                    alunoInfo = media;
                }
            }
            // Se a option não for de nome, cria td do aluno com demais infos
            if (selectId !== "nomeAluno") {
                // Acrescenta a info no array
                arrayAlunos[arrayContador][selectId] = alunoInfo;
                const alunosInfo = new NovoAluno(selectId, alunoInfo, contador);
                const tdAlunosInfo = alunosInfo.criaTd();
                if (selectId == "media") {
                    alunosInfo.addAlterarIcons(tdAlunosInfo);
                }
                selecionaAluno.appendChild(tdAlunosInfo);
            }
            contador++;
            arrayContador++;
        });
    });
    return arrayAlunos;
}
// Percorre o DOM para somar as notas e fazer media
function calculaMedia(contador) {
    let somaTotal = 0;
    const alunoRow = document.getElementById(`aluno${contador}`)
        .childNodes;
    alunoRow.forEach((celula) => {
        const eNota = parseFloat(celula.textContent);
        if (!isNaN(eNota)) {
            somaTotal += eNota;
        }
    });
    return somaTotal / 4;
}
// Função que adiciona notas ao carregar pagina
export function rowDefault(dados) {
    DOM.tbody.innerHTML = "";
    console.log(dados);
    // Percorre cada objeto e cria tr para cada um
    dados.forEach((dado) => {
        const dadoId = parseInt(dado.id);
        //Cria instancia de novo aluno coringa, para criar uma tr por aluno
        const alunoDefault = new NovoAluno("s/i", "s/i", dadoId);
        const alunoTr = alunoDefault.criaTr();
        //Adiciona cada uma das propeirdades como td, exerto id
        for (const prop in dado) {
            const chave = prop;
            if (chave !== "id") {
                const alunoInfo = dado[chave];
                const alunoCell = new NovoAluno(chave, alunoInfo, 0);
                const alunoCellTd = alunoCell.criaTd();
                alunoTr.appendChild(alunoCellTd);
            }
        }
        //Adiciona icones de alterar apenas na ultima tr
        alunoDefault.addAlterarIcons(alunoTr.lastChild);
    });
}
// Função que adiciona linha
export function rowNewAdd() {
    const lastTr = DOM.tbody.lastElementChild;
    const nextId = lastTr ? Number(lastTr.id.match(/\d+/)?.[0]) + 1 : 0;
    const alunoDefault = new NovoAluno("s/i", " ", nextId);
    const alunoTr = alunoDefault.criaTr();
    for (let i = 0; i <= 5; i++) {
        const alunoTd = alunoDefault.criaTd();
        if (i == 5) {
            alunoDefault.addAlterarIcons(alunoTd);
        }
        alunoTr.appendChild(alunoTd);
        alterarInputRow(alunoTr);
    }
    return alunoTr.lastChild
        .lastChild;
}
//# sourceMappingURL=tabelaNotas.js.map