import { alterarInputRow, alterarCancelRow, alterarConfirmRow, } from "./alterarInputs.js";
import { rowNewAdd } from "../tabelaNotas.js";
import { alertaErro } from "../../shared/errorAlert.js";
import { descartarRow } from "./descartarEvents.js";
import { hideConfirmIcons, showConfirmIcons } from "./confirmIcons.js";
let dadosOriginais = [];
let operacaoPai = "";
//Atenção: muitos eventos estão ligados ao nome espeicifo das operações!
export function alterarIconsEvent(event) {
    // Ouve o clique na div dos icones e filtra a ação
    const icon = event.target;
    const divContainer = event.currentTarget;
    if (icon.dataset.operacao) {
        const idContainer = divContainer.dataset.id;
        const selecionaRow = document.querySelector(`#aluno${idContainer}`);
        const confirmIcons = divContainer.querySelector(".alterarConfirmIcons");
        switch (icon.dataset.operacao) {
            case "alterar":
                operacaoPai = icon.dataset.operacao;
                // Retorna array com os dados originais
                dadosOriginais = alterarInputRow(selecionaRow);
                showConfirmIcons(confirmIcons, divContainer);
                break;
            case "confirmar":
                // Valida qual a operação antecedente
                if (operacaoPai !== "excluir") {
                    // Retorna um boleano avisado se tem erro, para evitar comportamento padrão
                    const verificaErro = alterarConfirmRow(selecionaRow, operacaoPai);
                    if (!verificaErro) {
                        hideConfirmIcons(confirmIcons, divContainer);
                    }
                }
                else if (operacaoPai == "excluir") {
                    descartarRow(parseInt(idContainer), selecionaRow);
                    hideConfirmIcons(confirmIcons, divContainer);
                }
                break;
            case "cancelar":
                // Valida qual a operação antecedente
                if (operacaoPai == "alterar") {
                    if (dadosOriginais.length) {
                        hideConfirmIcons(confirmIcons, divContainer);
                        alterarCancelRow(selecionaRow, dadosOriginais);
                        dadosOriginais = [];
                    }
                    else {
                        alertaErro("Os dados da linha não podem ser nulos");
                    }
                }
                else if (operacaoPai == "excluir") {
                    hideConfirmIcons(confirmIcons, divContainer);
                    selecionaRow.removeAttribute("style");
                }
                else if (operacaoPai == "adicionar") {
                    hideConfirmIcons(confirmIcons, divContainer);
                    selecionaRow.remove();
                }
                break;
            case "excluir":
                operacaoPai = icon.dataset.operacao;
                showConfirmIcons(confirmIcons, divContainer);
                selecionaRow.style.backgroundColor = "#ee6e73";
                break;
            case "adicionar":
                operacaoPai = "adicionar";
                const newRowIcons = rowNewAdd();
                showConfirmIcons(newRowIcons.lastElementChild, newRowIcons);
                newRowIcons.addEventListener("click", alterarIconsEvent);
                break;
        }
    }
}
//# sourceMappingURL=alterarIcons.js.map