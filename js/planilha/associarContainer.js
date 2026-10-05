import { fecharContainer } from "./planilhaContainer.js";
const associarPlanilha = document.querySelector(".associarPlanilha");
const cancelAssociar = document.querySelector(".cancelAssociar");
export function abrirAssociar() {
    associarPlanilha.style.display = "flex";
    cancelAssociar.addEventListener("click", fecharAssociar);
    fecharContainer();
}
function fecharAssociar() {
    associarPlanilha.style.display = "none";
    cancelAssociar.removeEventListener("click", fecharAssociar);
    return;
}
//# sourceMappingURL=associarContainer.js.map