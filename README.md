# 🧿 API-TO-DO-LIST

Uma API desenvolvida com foco em **boas práticas, modularização e organização de código**, seguindo o padrão **MVC** e utilizando o **Express**, **Sequelize** e banco de dados **SQLITE** no Node.js.

O projeto tem como objetivo demonstrar a construção de uma aplicação backend completa, capaz de realizar **operações CRUD de tarefas (To-Do List)**, com **integração ao banco SQLite** e **gerenciamento de variáveis de ambiente** via Dotenv.

💡 *API-TO-DO-LIST* simboliza o poder do controle — e esta API representa exatamente isso: **controle total sobre suas tarefas.**

---

## 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-------------|------------|
| **Node.js** | Ambiente de execução JavaScript no lado do servidor. |
| **Express.js** | Framework minimalista para criação e gerenciamento das rotas. |
| **SQLite** | Banco de dados relacional leve e eficiente. |
| **Dotenv** | Gerenciamento seguro de variáveis de ambiente. |
| **Arquitetura MVC** | Organização modular do projeto, separando responsabilidades. |

---

## 🏗️ Estrutura do Projeto

├── 📁 src
│ ├── 📁 controllers # Controladores que interagem com o serviço
│ ├── 📁 services # Lógica de negócio (CRUD de tarefas)
│ ├── 📁 routes # Definição das rotas
│ ├── 📁 database # Conexão e configuração do SQLite
│ ├── 📁 middlewares # Tratamento de erros e validações
│ ├── app.js # Configuração principal da aplicação
│ └── server.js # Inicialização do servidor
├── .env # Variáveis de ambiente
├── package.json # Dependências e scripts
└── README.md # Documentação do projeto



---

## ⚙️ Funcionalidades

✅ Criar tarefas  
✅ Listar todas as tarefas  
✅ Atualizar tarefas existentes  
✅ Excluir tarefas  
✅ Buscar tarefas por status  
✅ Tratamento de erros e validações

---

## 📄 Rotas Principais

| Método | Rota | Descrição |
|--------|------|------------|
| **POST** | `/task` | Cria uma nova tarefa |
| **GET** | `/task` | Lista todas as tarefas |
| **GET** | `/task/:id` | Lista tarefa por ID |
| **PUT** | `/task/:id` | Atualiza uma tarefa existente |
| **PATCH** | `/task/:id` | Atualiza status da tarefa existente |
| **DELETE** | `/tasks/:id | Exclui uma tarefa pelo ID|


## 🧩 Variáveis de Ambiente (.env)

Crie um arquivo `.env` na raiz do projeto e defina as variáveis necessárias:

PORT = EXEMPLO DE PORTA(3000);
DB_FILE = CAMINHO DE ONDE ESTA O SEU BANCO DE DADOS;


---

## 🛠️ Como Executar o Projeto

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/api-to-do-list.git

# Entre na pasta
cd api-to-do-list

# Instale as dependências
npm install

# Execute as migrações do banco de dados
npx sequelize db:migrate

# Inicie o servidor
npm run dev


-- O servidor será iniciado em: 
👉 http://localhost:3000


🧪 Testes com Postman

O Postman é uma ferramenta utilizada para testar e validar rotas de APIs de forma prática.
Neste projeto, foi criada uma coleção de requisições que permite testar todas as rotas da API To-Do List — desde a criação até a exclusão de tarefas — sem a necessidade de escrever código manualmente.

📦 O que está incluso

No diretório /postman, há um arquivo chamado:

API-TO-DO-LIST.postman_collection.json


Esse arquivo contém todas as requisições configuradas da API, incluindo:

POST → Criar tarefas

GET → Listar todas as tarefas

GET /:id → Buscar uma tarefa específica

PUT /:id → Atualizar uma tarefa

DELETE /:id → Excluir uma tarefa

🚀 Como usar no Postman

Baixe ou clone o repositório:

git clone https://github.com/seu-usuario/API-TO-DO-LIST.git


Abra o Postman e clique em:

Import → Upload Files


Selecione o arquivo:

/postman/API-TO-DO-LIST.postman_collection.json


Inicie o servidor localmente:

npm run dev


Agora, execute as requisições diretamente no Postman e visualize as respostas da sua API.