import { DOM } from "../../shared/dom.js";
import { addAlterarListners } from "../../shared/alterarListners.js";
import { dadosDelete } from "../../api/dados.delete.js";
import { alunoDelete } from "../../api/aluno.delete.js";
import { alertaErro } from "../../shared/errorAlert.js";

export async function descartarConfirm() {
  try {
    hideDisclaimer();
    // Requisição delete all---
    const retornoDelete = await dadosDelete();
    if (retornoDelete) {
      DOM.tbody.innerHTML = "";
    }
  } catch (e) {
    if (e instanceof Error) {
      alertaErro(`${e.message}`);
    }
  }
}

export function descartarCancel() {
  hideDisclaimer();
}

export async function descartarRow(
  id: number,
  selecionaRow: HTMLTableRowElement,
) {
  try {
    // Requisição delete row---
    const retornoDelete = await alunoDelete(id);
    if (retornoDelete) {
      selecionaRow.remove();
    }
  } catch (e) {
    if (e instanceof Error) {
      alertaErro(`${e.message}`);
    }
  }
}

function hideDisclaimer() {
  DOM.disclaimerDiv.style.display = "none";
  addAlterarListners();
  DOM.cancelDisclaimerBtn.removeEventListener("click", descartarConfirm);
  DOM.confirmDisclaimerBtn.removeEventListener("click", descartarCancel);
}
