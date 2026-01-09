# 📸 Galeria de Fotos

Aplicação web desenvolvida em **React + TypeScript** que exibe uma galeria de fotos consumindo uma **API pública de imagens (Unsplash)**. A aplicação permite visualizar fotos iniciais, pesquisar imagens por palavra-chave em tempo real e exibir mensagens adequadas quando não há resultados.

---

## 🧩 Funcionalidades

* Exibição inicial de **10 fotos** ao carregar a página
* Pesquisa de fotos por palavra-chave
* Busca em tempo real
* Consumo de API pública de fotos
* Layout em grid responsivo
* Feedback visual para:

  * Carregamento
  * Nenhum resultado encontrado

---

## 🛠️ Tecnologias Utilizadas

* **React 19**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Material UI Icons**
* **Unsplash API**

---

## 📂 Estrutura do Projeto

```
src/
 ├── api/
 │   └── fetchPhotos.ts
 ├── components/
 │   ├── header.tsx
 │   ├── searchInput.tsx
 │   └── galeriaDeFotos.tsx
 ├── types/
 │   └── Photo.ts
 ├── App.tsx
 ├── main.tsx
 └── index.css
```

---

## 🔑 API de Fotos

Este projeto utiliza a **Unsplash API**, uma API pública que fornece imagens de alta qualidade.

🔗 Site oficial:
[https://unsplash.com/developers](https://unsplash.com/developers)

### ⚠️ Importante sobre a chave da API

A chave da API está configurada no arquivo `.env` da seguinte forma:

```env
VITE_UNSPLASH_KEY=SUA_CHAVE_AQUI
```

👉 **Neste projeto, a chave foi deixada visível propositalmente para facilitar o acesso e a avaliação do projeto.**

⚠️ **Isso NÃO é uma boa prática em ambientes reais de produção**, pois:

* A chave pode ser exposta publicamente
* Pode gerar uso indevido
* Pode ultrapassar limites da API

📌 Em projetos profissionais, o correto é:

* Utilizar variáveis de ambiente seguras
* Proteger a chave no backend
* Nunca versionar chaves sensíveis

---

## ▶️ Como Rodar o Projeto Localmente

### 1️⃣ Pré-requisitos

* Node.js **18+**
* NPM ou Yarn

---

### 2️⃣ Clonar o repositório

```bash
git clone https://github.com/seu-usuario/galeria-de-fotos.git
cd galeria-de-fotos
```

---

### 3️⃣ Instalar as dependências

```bash
npm install
```

---

### 4️⃣ Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_UNSPLASH_KEY=SUA_CHAVE_DA_UNSPLASH
```

> ⚠️ Reforçando: a chave foi deixada aberta neste projeto apenas para fins didáticos.

---

### 5️⃣ Rodar o projeto

```bash
npm run dev
```

A aplicação estará disponível em:

👉 [http://localhost:5173](http://localhost:5173)

---

## 📦 Scripts Disponíveis

```json
"scripts": {
  "dev": "vite",
  "start": "vite",
  "build": "tsc -b && vite build",
  "preview": "vite preview"
}
```

* `npm run dev` → ambiente de desenvolvimento
* `npm run build` → build de produção
* `npm run preview` → preview do build

---

## 📸 Comportamento da Aplicação

* Ao abrir a página → **10 fotos são carregadas automaticamente**
* Ao digitar na busca → fotos são atualizadas conforme o termo
* Se não houver resultados → mensagem "Nenhuma foto encontrada"
* Interface responsiva para desktop e mobile

---

## 🚀 Possíveis Melhorias Futuras

* Debounce na busca
* Cache de resultados
* Skeleton loading
* Paginação
* Favoritar fotos
* Integração com React Query

---

## 👨‍💻 Autor

Projeto desenvolvido para fins **acadêmicos e didáticos**, com foco em boas práticas de React, TypeScript e consumo de APIs públicas.

---

© 2026 – Galeria de Fotos. Todos os direitos reservados.
