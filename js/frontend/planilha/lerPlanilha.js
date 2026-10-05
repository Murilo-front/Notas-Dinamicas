import * as XLSX from "xlsx";
import { lerCabecalho, lerDados, validaExtensão } from "./dadosPlanilha.js";
import { abrirAssociar, fecharAssociar } from "./associarContainer.js";
import { optionsFactory } from "./optionsPlanilha.js";
import { rowFacture } from "./tabelaNotas.js";
import { DOM } from "../shared/dom.js";
import { alertaErro } from "../shared/errorAlert.js";
import { dadosPost } from "../api/dados.post.js";
import { addAlterarListners } from "../shared/alterarListners.js";
export async function lerPlanilha() {
    let cabecalho = [""];
    // Valida a existencia do arquivo ao confirmar
    const arquivo = DOM.inputPlanilha.files[0];
    if (!arquivo) {
        alertaErro("Insira algum arquivo para continuar");
        return;
    }
    // Valida se o arquivo é uma planilha
    const arquivoValido = validaExtensão(arquivo);
    if (!arquivoValido) {
        alertaErro("O arquivo não tem um formato valido");
        return;
    }
    // Interpreta arquivo da planilha
    const buffer = await arquivo.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const primeiraPlanilha = workbook.Sheets[workbook.SheetNames[0]];
    // Funções que lêm cabeçalho e dados da planilha
    //Valida se planilha tem dados
    const dados = lerDados(primeiraPlanilha, DOM.semCabecalhoBtn.checked);
    if (dados.length === 0) {
        alertaErro("A planilha não contém informações");
        return;
    }
    cabecalho = lerCabecalho(primeiraPlanilha);
    // Abre container para associar tabelas da planilha com do sistema
    abrirAssociar();
    // Adiciona cabeçalho da planilha nas options do container
    optionsFactory(cabecalho, DOM.semCabecalhoBtn.checked);
    DOM.confirmAssociar.addEventListener("click", () => {
        try {
            //Adiciona dados da planilha no DOM
            const dadosFormatados = rowFacture(dados, DOM.semCabecalhoBtn.checked);
            dadosPost(dadosFormatados);
            fecharAssociar();
        }
        catch (e) {
            if (e instanceof Error) {
                alertaErro(`${e.message}`);
                console.log(e.message);
            }
        }
    });
    return;
}
//# sourceMappingURL=lerPlanilha.js.map