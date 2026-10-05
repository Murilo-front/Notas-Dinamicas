import * as XLSX from "xlsx";

export function lerCabecalho(primeiraPlanilha: any): string[] {
  const cabecalho = XLSX.utils.sheet_to_json(primeiraPlanilha, {
    header: 1,
    range: 0,
    raw: false,
  })[0] as string[];
  return cabecalho;
}

export function lerDados(
  primeiraPlanilha: any,
  semCabecalhoBtn: boolean,
): Record<string, unknown>[] | unknown[][] {
  if (!semCabecalhoBtn) {
    const dados =
      XLSX.utils.sheet_to_json<Record<string, unknown>>(primeiraPlanilha);
    return dados;
  } else {
    const dados = XLSX.utils.sheet_to_json(primeiraPlanilha, {
      header: 1,
    }) as unknown[][];
    return dados;
  }
}

export function validaExtensão(arquivo: any) {
  const extensoesPermitidas = [".xlsx", ".xls"];
  const extensaoValida = extensoesPermitidas.some((ext) =>
    arquivo.name.toLowerCase().endsWith(ext),
  );
  return extensaoValida;
}
