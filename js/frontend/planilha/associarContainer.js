import { fecharContainer } from "./planilhaContainer.js";
import { DOM } from "../shared/dom.js";
import { addAlterarListners, removeAlterarListners, } from "../shared/alterarListners.js";
export function abrirAssociar() {
    DOM.associarPlanilha.style.display = "flex";
    DOM.cancelAssociar.addEventListener("click", fecharAssociar);
    fecharContainer();
    removeAlterarListners();
}
export function fecharAssociar() {
    DOM.associarPlanilha.style.display = "none";
    addAlterarListners();
    DOM.cancelAssociar.removeEventListener("click", fecharAssociar);
    return;
}
//# sourceMappingURL=associarContainer.js.map