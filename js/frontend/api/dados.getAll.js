import { API_URL } from "./config.js";
export async function dadosGetAll() {
    try {
        const res = await fetch(`${API_URL}/dados`);
        if (!res.ok) {
            const erro = await res.json();
            throw new Error(erro.message);
        }
        const dadosNotas = await res.json();
        return dadosNotas.dados;
    }
    catch (e) {
        console.error(e);
    }
}
//# sourceMappingURL=dados.getAll.js.map