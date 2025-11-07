# Blog Moderno com Next.js, Prisma e NextAuth v5

Um blog fullstack desenvolvido com **Next.js 16**, **TypeScript**, **Prisma**, **Zustand**, e **NextAuth v5 (beta)** com autenticação via **Google** e **link mágico (Nodemailer)**.  
O projeto também possui **internacionalização com `next-intl`**, **tema dinâmico com Tailwind v5**, e um editor de texto rico com **React Quill**.

---

## Tecnologias

| Categoria | Tecnologias |
|------------|--------------|
| **Frontend** | Next.js 16 • React 19 • TypeScript • Tailwind CSS 4/5 • Ant Design 5 |
| **Autenticação** | NextAuth v5 (beta) • Google Provider • Magic Link (Nodemailer) |
| **Banco de Dados** | Prisma ORM • PostgreSQL / MySQL / SQLite (configurável) |
| **Gerenciamento de Estado** | Zustand |
| **Internacionalização (i18n)** | next-intl |
| **Outros** | Axios • React Quill (Editor de texto) • Day.js |

---

## Estrutura do Projeto
src/
├─ app/ # Rotas do Next.js (App Router)
│ ├─ [locale]/ # Páginas específicas de idioma (next-intl)
│ ├─ api/ # Rotas da API (NextAuth, etc.)
├─ components/ # Componentes reutilizáveis
├─ hooks/ # Hooks customizados (ex: useTheme)
├─ store/ # Zustand stores (ex: themeStore)
├─ libs/ # Configurações auxiliares (ex: prisma, auth)
├─ langs/ # Arquivos de tradução JSON (en.json, pt.json, etc.)
├─ prisma/ # Esquema e migrações
└─ styles/ # CSS global e temas


## Funcionalidades

- Login via Google ou Link Mágico (email)
- Sistema de usuários com perfis
- CRUD de posts com editor de texto rico
- Tema dinâmico (light/dark) usando Zustand e Tailwind `@theme inline`
- Internacionalização com **next-intl**
- Prisma com extensão Accelerate para otimização
- Envio de emails via **Nodemailer**
- Estrutura modular e tipada com TypeScript

---

## Estrutura do Projeto

---

## Configuração e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/my-blog.git
cd my-blog

```

## Configure as variáveis de ambiente

DATABASE_URL="file:./dev.db"
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=uma_chave_segura_aqui

# Google Auth
AUTH_GOOGLE_ID=seu_client_id
AUTH_GOOGLE_SECRET=seu_client_secret

# Magic Link (Nodemailer)
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=seuemail@gmail.com
EMAIL_SERVER_PASSWORD=sua_senha_ou_app_password
EMAIL_FROM="Seu Nome <seuemail@gmail.com>"

## Gere um banco de dados 
npx prisma migrate dev

## Inicie o servidor 
npm run dev e acesso no endereço: http://localhost:3000
