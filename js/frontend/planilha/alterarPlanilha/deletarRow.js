import { DOM } from "../../shared/dom.js";
export function alterarExcluirRow(selecionaRow) {
    DOM.confirmDisclaimerBtn.addEventListener("click", () => {
        selecionaRow.remove();
        DOM.disclaimerDiv.style.display = "none";
    });
    DOM.cancelDisclaimerBtn.addEventListener("click", () => {
        DOM.disclaimerDiv.style.display = "none";
    });
}
//# sourceMappingURL=deletarRow.js.map