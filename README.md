# KnowledgeHub 📚

Seja bem-vindo ao **KnowledgeHub**, uma biblioteca digital gratuita que centraliza artigos e materiais técnicos em formato PDF, organizados por categorias como **API**, **Desenvolvimento**, **GitHub**, **IA**, **Node.js** e **Python**.

Este repositório tem como objetivo democratizar o acesso ao conhecimento, oferecendo recursos que podem ser acessados e utilizados por qualquer pessoa interessada em tecnologia e programação.

---

## 🌐 Acesse o projeto

Você pode acessar o projeto diretamente via GitHub Pages:  
🔗 **[https://matheuschiodi.github.io/KnowledgeHub/](https://matheuschiodi.github.io/KnowledgeHub/)**

---

## ⚙️ Como funciona o projeto

O site foi desenvolvido em **React.js** utilizando **Vite**, **Tailwind CSS** e **Framer Motion** para animações. Os arquivos PDF são buscados automaticamente direto da pasta `/public/PDFs` deste repositório.

Cada pasta representa uma categoria de conhecimento. O frontend consome a [API pública do GitHub](https://docs.github.com/en/rest/repos/contents) para listar os arquivos de forma dinâmica, sem necessidade de alterar o código toda vez que um novo PDF for adicionado.

**Ou seja:** sempre que você subir um novo PDF no repositório, ele aparecerá automaticamente no site, classificado pela pasta em que foi colocado.

---

## 📁 Como encontrar os arquivos

Todos os materiais estão organizados dentro da pasta:

```
/public/PDFs
```

Cada subpasta representa uma categoria, como por exemplo:

```
/public/PDFs/API
/public/PDFs/Desenvolvimento
/public/PDFs/GitHub
/public/PDFs/IA
/public/PDFs/Nodejs
/public/PDFs/Python
```

No site, os arquivos aparecem agrupados exatamente como no repositório. Exemplo:

- Um PDF dentro de `/public/PDFs/IA/Guia Prompts IA - MChiodi.pdf` aparecerá automaticamente na categoria **IA**.
- Um PDF em `/public/PDFs/Nodejs/Como Criar uma API com Node.js - MChiodi.pdf` será exibido em **Nodejs**.

---

## 🧑‍💻 Como contribuir

Quer contribuir com novos materiais? Siga os passos:

1. Faça um **fork** do repositório.
2. Adicione arquivos **.pdf** na subpasta apropriada dentro de `/public/PDFs/`.
3. Mantenha o padrão de nome: `Categoria - Nome do Arquivo.pdf`
4. Envie um **pull request**.

Não é necessário modificar nenhum código — o sistema detecta os arquivos automaticamente!

---

## 📜 Regras para contribuição

- Os materiais devem estar em **formato PDF**.
- Devem ser de livre distribuição ou autoria própria.
- Nomeie os arquivos com clareza e mantenha a padronização.

---

## 🧠 Licença

Este repositório é mantido com foco na disseminação do conhecimento de forma aberta. Sempre verifique os direitos autorais do conteúdo que deseja compartilhar.

---

## 📲 Redes e contato

Me acompanhe em outras redes para mais conteúdos sobre programação e tecnologia:

- 🌍 Portfólio: [https://matheuschiodi.github.io/Portfolio/](https://matheuschiodi.github.io/Portfolio/)
- 💼 LinkedIn: [https://www.linkedin.com/in/matheus-chiodi](https://www.linkedin.com/in/matheus-chiodi)
- 🐙 GitHub: [https://github.com/MatheusChiodi](https://github.com/MatheusChiodi)
- 📷 Instagram: [https://www.instagram.com/mchiodidev](https://www.instagram.com/mchiodidev)
- ▶️ YouTube: [https://www.youtube.com/@MChiodiDev](https://www.youtube.com/@MChiodiDev)
- ▶️ TikTok: [https://www.tiktok.com/@mchiodidev](https://www.tiktok.com/@mchiodidev)

---

**Aproveite, aprenda e compartilhe com a comunidade!** 🚀
