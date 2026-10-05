import * as XLSX from "xlsx";
import { lerCabecalho, lerDados, validaExtensão } from "./dadosPlanilha.js";
import { abrirAssociar } from "./associarContainer.js";
import { optionsFactory } from "./optionsPlanilha.js";
import { semCabecalho } from "./planilhaContainer.js";
import { rowFacture } from "./tabelaNotas.js";
const confirmAssociar = document.querySelector(".confirmAssociar");
export async function lerPlanilha() {
    const inputPlanilha = document.getElementById("planilha");
    let cabecalho = [""];
    // Valida a existencia do arquivo ao confirmar
    const arquivo = inputPlanilha.files[0];
    if (!arquivo) {
        console.log("deu ruim 1");
        return;
    }
    // Valida se o arquivo é uma planilha
    const arquivoValido = validaExtensão(arquivo);
    if (!arquivoValido) {
        console.log("deu ruim 2");
        return;
    }
    // Interpreta arquivo da planilha
    const buffer = await arquivo.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const primeiraPlanilha = workbook.Sheets[workbook.SheetNames[0]];
    // Funções que lêm cabeçalho e dados da planilha
    //Valida se planilha tem dados
    const dados = lerDados(primeiraPlanilha);
    if (dados.length === 0) {
        console.log("deu ruim 3");
        return;
    }
    cabecalho = lerCabecalho(primeiraPlanilha);
    // Abre container para associar tabelas da planilha com do sistema
    abrirAssociar();
    // Adiciona cabeçalho da planilha, nas options do container
    optionsFactory(cabecalho, semCabecalho.checked);
    confirmAssociar.addEventListener("click", () => {
        rowFacture(dados);
    });
    return;
}
//# sourceMappingURL=lerPlanilha.js.map