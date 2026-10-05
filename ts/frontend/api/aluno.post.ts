import { API_URL } from "./config.js";

export async function alunoPost(dado: Record<string, unknown>) {
  try {
    const res = await fetch(`${API_URL}/dados/aluno`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dado),
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
