import { DOM } from "../../shared/dom.js";
import { abrirContainer } from "../planilhaContainer.js";
import { voltarModificar } from "./alterarBtns.js";
import { alterarIconsEvent } from "./alterarIcons.js";

export function showConfirmIcons(
  confirmIcons: HTMLDivElement,
  divContainer: HTMLDivElement,
) {
  document.documentElement.style.setProperty("--display-alterar-icons", "none");

  confirmIcons.style.display = "flex";
  divContainer.style.transform = "translateX(100%)";
  divContainer.style.opacity = "1";

  DOM.adicionarRowIcon.removeEventListener("click", alterarIconsEvent);
  DOM.voltarModificarBtn.removeEventListener("click", voltarModificar);
  DOM.importarBtn!.removeEventListener("click", abrirContainer);
}

export function hideConfirmIcons(
  confirmIcons: HTMLDivElement,
  divContainer: HTMLDivElement,
) {
  document.documentElement.style.setProperty("--display-alterar-icons", "flex");

  confirmIcons.style.display = "none";
  divContainer.removeAttribute("style");

  DOM.adicionarRowIcon.addEventListener("click", alterarIconsEvent);
  DOM.voltarModificarBtn.addEventListener("click", voltarModificar);
  DOM.importarBtn!.addEventListener("click", abrirContainer);
}
