![Vite](https://img.shields.io/badge/Vite-yellow)
![Typescript](https://img.shields.io/badge/Typescript-blue)
![SQLite](https://img.shields.io/badge/SQLite-red)
![FastAPI](https://img.shields.io/badge/FastAPI-orange)
![Electron](https://img.shields.io/badge/Electron-green)

# Projeto Notas Dinâmicas

### 📝 Descrição

Tabela de notas de alunos com suas respectivas médias. Permite adicionar notas a partir de tabelas no exel, modificar as mesmas e adicionar outras. Armazena informações em banco de dados local. Projeto aprimorado com o uso de typescript e Vite no frontend, python e fastAPI no backend e Electron para fazer o WebView.

### 👀 Demonstração

#### Página principal

Uma visão da interface geral do projeto

<img src="produto/Foto-produto.png" alt="Foto do produto">

### 💻 Tecnologias utilizadas

#### FrontEnd

- Vite
- TypeScript
- Electron

#### BackEnd

- Python
- FastAPI
- SQLite
- CORS

### 💻 Requisitos

- Node.js
- Python 3
- npm (instalado junto com o Node.js)

### 🎯 Objetivos de aprendizado

- Praticar conceitos de requisições via `FastAPI`.
- Uso do `Electron` para criar WebViews.
- Conceitos de leitura e validações de arquivos `.xlsx`.

## Download

Se você deseja apenas instalar e utilizar o programa, não é necessário baixar o código-fonte.

Acesse a página de Releases e baixe o instalador da versão mais recente:

Releases → versão mais recente → Projeto Notas Setup.exe

Se você deseja executar ou modificar o projeto a partir do código-fonte, siga as instruções de instalação abaixo.

### 📲 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/Murilo-front/Notas-Dinamicas.git meu-projeto
```

2. Acesse a pasta do projeto:

```bash
cd meu-projeto
```

3. Instalar as dependências

#### Frontend/Electron

Na raiz do projeto:

```bash
npm install
```

Isso instala as dependências definidas no `package.json`.

#### Backend

Entre na pasta do backend:

```bash
cd backend
```

Crie o ambiente virtual:

```bash
python -m venv .venv
```

Ative o ambiente virtual no Windows:

```bash
.\.venv\Scripts\Activate.ps1
```

Instale as dependências Python:

```bash
pip install -r requirements.txt
```

### 📲 Execução

1. Iniciar FrontEnd

Na raiz do projeto:

```bash
npm run dev
```

2. Iniciar BackEnd

#### Iniciar no navegador

```bash
npm run back
```

#### Iniciar com Electron

Necessário gerar server.exe primeiro

```bash
npm run electron
```

3. Gerar server.exe

Entre no backEnd:

```bash
cd backend
```

Inicie o ambiente virtual:

```bash
.\.venv\Scripts\Activate.ps1
```

Instale o Pyinstaller:

```bash
pip install pyinstaller
```

Gere o executável:

```bash
pyinstaller --onefile server.py
```

_O server.exe não é versionado no GitHub, pois é um arquivo gerado pelo PyInstaller. Para reproduzi-lo, basta executar novamente o comando acima._

4. Gerar aplicativo Electron

Retorne a pasta raiz:

```bash
cd ..
```

Gere o build do frontend:

```bash
npm run build
```

Depois gere o instalador do Electron:

```bash
npm run dist
```

O Electron Builder irá gerar os arquivos de distribuição na pasta:

```bash
dist/
```

Entre eles estará o instalador do aplicativo:

Projeto Notas Setup 1.0.0.exe

5. Gerar banco

Caso o banco no diretório

```bash
backend/banco/notas.db
```

Seja apagado, basta usar o comando:

```bash
npm run build:back
```

6. Duvidas com comandos

Para eventuais duvidas com comandos ou problemas em inicializar o backend, conferir documento `backHelp.txt`.
