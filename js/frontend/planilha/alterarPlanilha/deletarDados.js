import { DOM } from "../../shared/dom.js";
import { addAlterarListners, removeAlterarListners, } from "../../shared/alterarListners.js";
export function alterarExcluirRow(selecionaRow) {
    removeAlterarListners();
    DOM.confirmDisclaimerBtn.addEventListener("click", () => {
        selecionaRow.remove();
        DOM.disclaimerDiv.style.display = "none";
        addAlterarListners();
    });
    DOM.cancelDisclaimerBtn.addEventListener("click", () => {
        DOM.disclaimerDiv.style.display = "none";
        addAlterarListners();
    });
}
//# sourceMappingURL=deletarDados.js.map