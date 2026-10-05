export const DOM = {
  tbody: document.querySelector("#tbody") as HTMLBodyElement,

  // PlanilhaBtns
  importarBtn: document.querySelector(".abrirImportar") as HTMLButtonElement,
  inputPlanilha: document.getElementById("planilha") as HTMLInputElement,
  confirmBtn: document.querySelector(
    ".confirmPlanilhaBtn",
  ) as HTMLButtonElement,
  cancelBtn: document.querySelector(".cancelPlanilhaBtn") as HTMLButtonElement,
  semCabecalhoBtn: document.getElementById("semCabecalho") as HTMLInputElement,

  //Associar
  confirmAssociar: document.querySelector(
    ".confirmAssociarBtn",
  ) as HTMLButtonElement,
  associarPlanilha: document.querySelector(
    ".associarPlanilha",
  ) as HTMLDivElement,
  cancelAssociar: document.querySelector(
    ".cancelAssociarBtn",
  ) as HTMLButtonElement,
  selects: document.querySelectorAll(
    ".select",
  ) as NodeListOf<HTMLSelectElement>,
  planilhaContainer: document.querySelector(
    ".importarPlanilha",
  ) as HTMLDivElement,

  //Modificar
  modificarOptionsBtns: document.querySelector(
    ".modificarOptionsBtns",
  ) as HTMLDivElement,
  modificarConfirmBtns: document.querySelector(
    ".modificarConfirmBtns",
  ) as HTMLDivElement,
  descartarBtn: document.querySelector("#descartarBtn") as HTMLButtonElement,
  alterarDadosBtn: document.querySelector(
    "#alterarDadosBtn",
  ) as HTMLButtonElement,
  voltarModificarBtn: document.querySelector(
    "#voltarModificarBtn",
  ) as HTMLButtonElement,
  adicionarRowIcon: document.querySelector(".adicionarRow") as HTMLDivElement,

  //Disclaimer
  disclaimerDiv: document.querySelector(".disclaimerDiv") as HTMLDivElement,
  cancelDisclaimerBtn: document.querySelector(
    ".cancelDisclaimerBtn",
  ) as HTMLButtonElement,
  confirmDisclaimerBtn: document.querySelector(
    ".confirmDisclaimerBtn",
  ) as HTMLButtonElement,
};
