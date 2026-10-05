import { DOM } from "../shared/dom.js";
//
export function optionsFactory(cabecalho, semCabecalho) {
    let contador = 0;
    // Limpa os campos antes de adicionar
    const defaultOption = `<option value="s/n">Sem info</option>`;
    DOM.selects.forEach((select) => {
        select.innerHTML = defaultOption;
    });
    // Se tem cabeçalho, adiciona as informações como options
    if (!semCabecalho) {
        cabecalho.forEach((coluna) => {
            const option = `<option value="${coluna}">${coluna}</option>`;
            DOM.selects.forEach((select) => {
                select.insertAdjacentHTML("beforeend", option);
            });
        });
    }
    else {
        // Se não tem cabeçalho, adiciona contador com coluna como options
        cabecalho.forEach(() => {
            const option = `<option value="${contador}">Coluna ${contador++}</option>`;
            DOM.selects.forEach((select) => {
                select.insertAdjacentHTML("beforeend", option);
            });
        });
    }
}
//# sourceMappingURL=optionsPlanilha.js.map