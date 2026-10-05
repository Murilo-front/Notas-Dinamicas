import { abrirContainer } from "./planilha/planilhaContainer.js";
import { DOM } from "./shared/dom.js";
import { dadosGetAll } from "./api/dados.getAll.js";
import { alertaErro } from "./shared/errorAlert.js";
import { rowDefault } from "./planilha/tabelaNotas.js";
import { addAlterarListners } from "./shared/alterarListners.js";
//Adiciona dados salvos ao carregar a pagina
(async () => {
    try {
        const dados = await dadosGetAll();
        if (dados.length) {
            rowDefault(dados);
            return;
        }
        return;
    }
    catch (e) {
        if (e instanceof Error) {
            alertaErro(`${e.message}`);
        }
    }
})();
DOM.importarBtn.addEventListener("click", abrirContainer);
addAlterarListners();
//# sourceMappingURL=main.js.map