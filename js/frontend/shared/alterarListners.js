import { DOM } from "./dom.js";
import { alterarDados, descartarDados, } from "../planilha/alterarPlanilha/alterarBtns.js";
export function addAlterarListners() {
    DOM.alterarDadosBtn.addEventListener("click", alterarDados);
    DOM.descartarBtn.addEventListener("click", descartarDados);
}
export function removeAlterarListners() {
    DOM.alterarDadosBtn.removeEventListener("click", alterarDados);
    DOM.descartarBtn.removeEventListener("click", descartarDados);
}
//# sourceMappingURL=alterarListners.js.map