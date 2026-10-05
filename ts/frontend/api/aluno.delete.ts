import { API_URL } from "./config.js";

export async function alunoDelete(id: number) {
  try {
    const res = await fetch(`${API_URL}/dados/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const erro = await res.json();
      throw new Error(erro.message);
    }

    return await res.json();
  } catch (e) {
    console.error(e);
  }
}
