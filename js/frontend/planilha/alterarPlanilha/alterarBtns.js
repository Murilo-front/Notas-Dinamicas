import { DOM } from "../../shared/dom.js";
import { alterarIconsEvent } from "./alterarIcons.js";
import { removeAlterarListners } from "../../shared/alterarListners.js";
import { descartarCancel, descartarConfirm } from "./descartarEvents.js";
export function alterarDados() {
    document.documentElement.style.setProperty("--display-alterar", "flex");
    DOM.modificarOptionsBtns.style.display = "none";
    const alterarIconsList = document.querySelectorAll(".alterarIcons");
    alterarIconsList.forEach((e) => {
        e.addEventListener("click", alterarIconsEvent);
    });
    DOM.voltarModificarBtn.addEventListener("click", voltarModificar);
}
export function voltarModificar() {
    document.documentElement.style.setProperty("--display-alterar", "none");
    DOM.modificarOptionsBtns.style.display = "flex";
    const alterarIconsList = document.querySelectorAll(".alterarIcons");
    alterarIconsList.forEach((e) => {
        e.removeEventListener("click", alterarIconsEvent);
    });
    DOM.voltarModificarBtn.removeEventListener("click", voltarModificar);
}
export function descartarDados() {
    DOM.disclaimerDiv.style.display = "flex";
    removeAlterarListners();
    DOM.confirmDisclaimerBtn.addEventListener("click", descartarConfirm);
    DOM.cancelDisclaimerBtn.addEventListener("click", descartarCancel);
}
//# sourceMappingURL=alterarBtns.js.map