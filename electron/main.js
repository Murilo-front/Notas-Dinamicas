import { app, BrowserWindow } from "electron";
import { spawn } from "child_process";
import path from "path";

let backend;

function iniciarBackend() {
  //Passa caminho do executável
  const backendPath = app.isPackaged
    ? path.join(process.resourcesPath, "backend", "server.exe")
    : path.join(process.cwd(), "backend", "dist", "server.exe");

  backend = spawn(backendPath, []);

  //Mensagens de dado recebido e dado com erro no backend
  backend.stdout.on("data", (data) => {
    console.log(`BACKEND: ${data}`);
  });

  backend.stderr.on("data", (data) => {
    console.error(`BACKEND: ${data}`);
  });
}

function criarJanela() {
  const janela = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  //Verifica se é ambiente de produção ou desenvolvimento
  if (!app.isPackaged) {
    // Desenvolvimento
    janela.loadURL("http://localhost:5173");
  } else {
    // Produção
    janela.loadFile(path.join(app.getAppPath(), "dist", "index.html"));
  }
}

app.whenReady().then(() => {
  iniciarBackend();
  criarJanela();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
