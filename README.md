# 🔗 Linktree Clone — React + TypeScript + Firebase

Aplicação web inspirada no **Linktree**, desenvolvida com **React**, **TypeScript** e **Firebase**, permitindo que usuários autenticados gerenciem seus próprios links de forma simples e segura.

O projeto conta com autenticação, integração com banco de dados em tempo real e funcionalidades completas de **CRUD** (criar, editar e remover links).

---

## 🚀 Funcionalidades

- 🔐 **Autenticação de usuários**
  - Login com Firebase Authentication
- 🔗 **Gerenciamento de links**
  - Inserção de novos links
  - Edição de links existentes
  - Remoção de links
- ☁️ **Banco de dados em tempo real**
  - Integração com Firebase (Firestore ou Realtime Database)
- 🧑‍💻 **Painel administrativo**
  - Área protegida para gerenciamento dos dados
- 📱 **Interface responsiva**
  - Adaptada para desktop e dispositivos móveis
- ⚡ **Tipagem forte**
  - Projeto desenvolvido 100% em TypeScript

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Firebase**
  - Authentication
  - Firestore / Realtime Database
- **Vite**
- **Tailwind**

---

## 📂 Estrutura do Projeto (exemplo)

```txt
src/
 ├── components/
 ├── pages/
 ├── services/
 │   └── firebaseConnection.ts
 ├── routes/
 └── App.tsx
```

---

## 🔐 Autenticação

A autenticação é feita através do Firebase Authentication, garantindo que apenas usuários logados possam:

- **Criar links**
- **Editar links**
- **Excluir links**

Rotas protegidas impedem acesso não autorizado ao painel administrativo.

---

## 🗄️ Banco de Dados

Os dados dos links são armazenados no Firebase, permitindo:

- **Leitura em tempo real**
- **Persistência segura dos dados**
- **Atualizações instantâneas na interface**

---

## ▶️ Como executar o projeto

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Instale as dependências

```bash
npm install
```

3. Configure o Firebase
   Crie um projeto no Firebase e adicione as credenciais no arquivo:

`src/services/firebaseConnection.ts`

4. Execute o projeto

```bash
npm run dev
```

---

## 📄 Licença

Este projeto está sob a licença MIT.
Sinta-se livre para utilizar, modificar e contribuir.

---

## 👨‍💻 Autor

Desenvolvido por Caio Eduardo 🚀
Se gostou do projeto, deixe uma ⭐ no repositório!
