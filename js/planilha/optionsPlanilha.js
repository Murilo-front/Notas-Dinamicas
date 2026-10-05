export const selects = document.querySelectorAll(".select");
export function optionsFactory(cabecalho, semCabecalho) {
    let contador = 0;
    // Limpa os campos antes de adicionar
    const defaultOption = `<option value="">Sem info</option>`;
    selects.forEach((select) => {
        select.innerHTML = defaultOption;
    });
    // Se tem cabeçalho, adiciona as informações como options
    // Se não tem cabeçalho, asiciona contador com coluna como options
    if (!semCabecalho) {
        cabecalho.forEach((coluna) => {
            const option = `<option value="${coluna}">${coluna}</option>`;
            selects.forEach((select) => {
                select.insertAdjacentHTML("beforeend", option);
            });
        });
    }
    else {
        cabecalho.forEach(() => {
            const option = `<option value="${contador}">Coluna ${contador++}</option>`;
            selects.forEach((select) => {
                select.insertAdjacentHTML("beforeend", option);
            });
        });
    }
}
//# sourceMappingURL=optionsPlanilha.js.map