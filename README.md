# Finly API 💰

API backend da aplicação **Finly**, responsável pelo gerenciamento de dados,
regras de negócio e autenticação dos usuários.

---

## 🚀 Sobre o Projeto

O Finly é uma aplicação de gestão financeira que permite ao usuário controlar
receitas e despesas de forma organizada e segura.

Este repositório representa o **backend da aplicação**, responsável pela
autenticação, persistência de dados e exposição de uma API RESTful consumida
pelo frontend.

---

## 🛠️ Tecnologias Utilizadas

- Node.js
- TypeScript
- Fastify
- Prisma ORM
- MongoDB
- Zod
- Firebase Authentication
- Docker

---

## 🗄️ Banco de Dados

A aplicação utiliza **MongoDB** como banco de dados, integrado através do
**Prisma ORM**, garantindo escalabilidade e flexibilidade no armazenamento
dos dados financeiros.

---

## ⚙️ Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

📌 Funcionalidades
Autenticação de usuários

Cadastro de receitas e despesas

Gerenciamento de categorias

Validações e regras de negócio

API RESTful segura e escalável

--- 

## ▶️ Como executar o projeto
````bash
Copiar código
# Clone o repositório
git clone https://github.com/matheusoliiveira/finly-api

# Acesse a pasta
cd finly-api

# Instale as dependências
npm install

# Gere o Prisma Client
npx prisma generate

# Inicie a aplicação
npm run dev
🔗 Integração com Frontend
Este backend é consumido pelo frontend da aplicação Finly.

🔗 Repositório do Frontend:
https://github.com/matheusoliiveira/finly-interface
