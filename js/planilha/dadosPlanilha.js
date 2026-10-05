import * as XLSX from "xlsx";
export function lerCabecalho(primeiraPlanilha) {
    const cabecalho = XLSX.utils.sheet_to_json(primeiraPlanilha, {
        header: 1,
        range: 0,
        raw: false,
    })[0];
    return cabecalho;
}
export function lerDados(primeiraPlanilha) {
    const dados = XLSX.utils.sheet_to_json(primeiraPlanilha);
    return dados;
}
export function validaExtensão(arquivo) {
    const extensoesPermitidas = [".xlsx", ".xls"];
    const extensaoValida = extensoesPermitidas.some((ext) => arquivo.name.toLowerCase().endsWith(ext));
    return extensaoValida;
}
//# sourceMappingURL=dadosPlanilha.js.map