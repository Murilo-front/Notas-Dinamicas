import { API_URL } from "./config.js";

export async function dadosPost(dados: Record<string, unknown>[]) {
  try {
    const res = await fetch(`${API_URL}/dados`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
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
