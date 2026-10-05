import * as XLSX from "xlsx";
document.querySelector(".confirmBtn").addEventListener("click", async () => {
    const inputPlanilha = document.getElementById("planilha");
    const arquivo = inputPlanilha.files[0];
    if (!arquivo) {
        console.log("deu ruim");
        return;
    }
    const buffer = await arquivo.arrayBuffer();
    const workbook = XLSX.read(buffer);
    const primeiraPlanilha = workbook.Sheets[workbook.SheetNames[0]];
    const cabecalho = XLSX.utils.sheet_to_json(primeiraPlanilha, {
        header: 1,
        range: 0,
        raw: false,
    })[0];
    console.log(cabecalho);
});
//# sourceMappingURL=lerPlanilha.js.map