import { alunoPatch } from "../../api/aluno.patch.js";
import { alunoPost } from "../../api/aluno.post.js";
import { alertaErro } from "../../shared/errorAlert.js";

// Adiciona inputs para alterar a row
export function alterarInputRow(selecionaRow: HTMLTableRowElement): string[] {
  // Retorna array com os valores originais
  let dadosOriginais: string[] = [];
  let contador = 0;

  // Acrescenta inputs em cada uma das celulas da linha
  // Coloca o valor original dentro dos inputs

  (selecionaRow!.childNodes as NodeListOf<HTMLTableCellElement>).forEach(
    (celula) => {
      const celulaValor = celula.textContent.trim();

      dadosOriginais.push(celulaValor);

      celula.firstChild!.remove();
      const input = document.createElement("input");
      if (contador == 0) {
        input.type = "text";
      } else {
        input.type = "number";
      }
      input.value = celulaValor;
      celula.prepend(input);
      contador++;
    },
  );
  return dadosOriginais;
}

//Confirmado alteração
// Atenção: Requisições aqui presentes dependem da organização das colunas!
export function alterarConfirmRow(
  selecionaRow: HTMLTableRowElement,
  operacaoPai: string,
): boolean {
  // Função que altera as rows para o valor digitado, validando os campos de notas
  let verificaErro: [boolean, string] = [false, ""];
  // Cria objeto do aluno para enviar a requisição
  let contador: number = 0;
  const objetoAluno: Record<string, string | number> = { default: 0 };

  // Percorre todas as tds da row validando e modificando visualmente
  (selecionaRow!.childNodes as NodeListOf<HTMLTableCellElement>).forEach(
    (celula) => {
      // Pega valor digitado, remove o input e acescenta o valor digitado
      let celulaInputValor: string | number = (
        celula.firstChild as HTMLInputElement
      ).value;
      const inputType = (celula.firstChild as HTMLInputElement).type;

      if (inputType == "number") {
        const validaValor = parseFloat(celulaInputValor);
        if (isNaN(validaValor)) {
          verificaErro = [true, "nota"];
        }

        if (contador !== 5) {
          objetoAluno[`nota${contador}`] = `${celulaInputValor}`;
        } else {
          objetoAluno[`media`] = `${celulaInputValor}`;
        }
      } else if (inputType == "text") {
        const validaValor = parseFloat(celulaInputValor);
        if (!isNaN(validaValor)) {
          verificaErro = [true, "nome"];
        }

        // Remove propeidade default
        delete objetoAluno.default;

        objetoAluno["nomeAluno"] = `${celulaInputValor}`;
      }
      contador++;
      celula.firstChild!.remove();
      celula.prepend(celulaInputValor);
    },
  );
  // Caso tenha erro, adiciona os inputs novamente e retorna mensagem de erro
  if (verificaErro[0]) {
    alterarInputRow(selecionaRow);
    switch (verificaErro[1]) {
      case "nota":
        alertaErro("Os campos de nota devem ser preenchidos com numeros");
        break;
      case "nome":
        alertaErro("O campo de nome devem ser preenchidos com letras");
        break;
    }
  } else {
    // Caso certo, prossegue com as requisições
    console.log(objetoAluno);
    switch (operacaoPai) {
      case "alterar":
        // Requisição metodo PATCH ---
        const rowId = Number(selecionaRow.id.match(/\d+/)?.[0]);
        alunoPatch(objetoAluno, rowId);
        break;
      case "adicionar":
        // Requisição metodo POST ---
        alunoPost(objetoAluno);
        break;
    }
  }
  return verificaErro[0];
}

// Cancelada alteração
export function alterarCancelRow(
  selecionaRow: HTMLTableRowElement,
  dadosOriginais: string[],
) {
  let contador = 0;

  (selecionaRow!.childNodes as NodeListOf<HTMLTableCellElement>).forEach(
    (celula) => {
      celula.firstChild!.remove();
      celula.prepend(dadosOriginais[contador]!);
      contador++;
    },
  );
}
