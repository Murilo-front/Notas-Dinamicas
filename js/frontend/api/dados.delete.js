import { API_URL } from "./config.js";
export async function dadosDelete() {
    try {
        const res = await fetch(`${API_URL}/dados`, {
            method: "DELETE",
        });
        if (!res.ok) {
            const erro = await res.json();
            throw new Error(erro.message);
        }
        return await res.json();
    }
    catch (e) {
        console.error(e);
    }
}
//# sourceMappingURL=dados.delete.js.map