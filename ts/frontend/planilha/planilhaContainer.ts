import { lerPlanilha } from "./lerPlanilha.js";
import { DOM } from "../shared/dom.js";
import { voltarModificar } from "./alterarPlanilha/alterarBtns.js";
import {
  addAlterarListners,
  removeAlterarListners,
} from "../shared/alterarListners.js";

// Mostra interface para importar planilha
export async function abrirContainer() {
  try {
    // Esconde disclaimer de descartar dados
    DOM.disclaimerDiv.style.display = "none";

    //Mostra container visualmente
    DOM.semCabecalhoBtn.checked = false;
    DOM.planilhaContainer.style.display = "flex";
    DOM.inputPlanilha.value = "";

    DOM.cancelBtn.addEventListener("click", fecharContainer);
    DOM.confirmBtn.addEventListener("click", lerPlanilha);

    voltarModificar();
    removeAlterarListners();
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function fecharContainer() {
  DOM.planilhaContainer.style.display = "none";
  DOM.cancelBtn.removeEventListener("click", fecharContainer);
  DOM.confirmBtn.removeEventListener("click", lerPlanilha);

  addAlterarListners();
  return;
}
