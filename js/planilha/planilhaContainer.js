import { lerPlanilha } from "./lerPlanilha.js";
const planilhaContainer = document.querySelector(".importarPlanilha");
export const confirmBtn = document.querySelector(".confirmBtn");
export const cancelBtn = document.querySelector(".cancelBtn");
export const semCabecalho = document.getElementById("semCabecalho");
// Mostra interface para importar planilha
export async function abrirContainer() {
    try {
        const inputPlanilha = document.getElementById("planilha");
        semCabecalho.checked = false;
        planilhaContainer.style.display = "flex";
        inputPlanilha.value = "";
        cancelBtn.addEventListener("click", fecharContainer);
        confirmBtn.addEventListener("click", lerPlanilha);
    }
    catch (e) {
        console.log(e);
        return null;
    }
}
export function fecharContainer() {
    planilhaContainer.style.display = "none";
    cancelBtn.removeEventListener("click", fecharContainer);
    confirmBtn.removeEventListener("click", lerPlanilha);
    return;
}
//# sourceMappingURL=planilhaContainer.js.map