# KnowledgeHub 📚

Welcome to **KnowledgeHub**, a free digital library that centralizes articles and technical materials in PDF format, organized into categories like **API**, **Development**, **GitHub**, **AI**, **Node.js**, and **Python**.

This repository aims to democratize access to knowledge by offering resources that can be accessed and used by anyone interested in technology and programming.

---

## 🌐 Access the project

You can access the project directly via GitHub Pages:  
🔗 **[https://matheuschiodi.github.io/KnowledgeHub/](https://matheuschiodi.github.io/KnowledgeHub/)**

---

## ⚙️ How the project works

The site is built with **React.js** using **Vite**, **Tailwind CSS**, and **Framer Motion** for animations. PDF files are automatically fetched from the `/public/PDFs` folder in this repository.

Each folder represents a knowledge category. The frontend consumes the [GitHub public API](https://docs.github.com/en/rest/repos/contents) to dynamically list files, with no need to update the code when a new PDF is added.

**In other words:** every time you upload a new PDF to the repository, it will automatically appear on the site, categorized by the folder it was placed in.

---

## 📁 Where to find the files

All materials are organized inside the following folder:

```
/public/PDFs
```

Each subfolder represents a category, such as:

```
/public/PDFs/API
/public/PDFs/Development
/public/PDFs/GitHub
/public/PDFs/AI
/public/PDFs/Nodejs
/public/PDFs/Python
```

On the site, files are grouped exactly as they are in the repository. For example:

- A PDF inside `/public/PDFs/AI/AI Prompt Guide - MChiodi.pdf` will automatically appear under the **AI** category.
- A file like `/public/PDFs/Nodejs/How to Build an API with Node.js - MChiodi.pdf` will be shown under **Nodejs**.

---

## 🧑‍💻 How to contribute

Want to contribute new materials? Follow these steps:

1. **Fork** the repository.
2. Add **.pdf** files in the appropriate subfolder within `/public/PDFs/`.
3. Keep the naming format: `Category - File Name.pdf`
4. Submit a **pull request**.

There’s no need to change any code — the system detects the files automatically!

---

## 📜 Contribution guidelines

- Files must be in **PDF format**.
- They must be freely distributable or your own work.
- Name files clearly and follow the naming convention.

---

## 🧠 License

This repository is maintained with a focus on sharing knowledge openly. Always verify the copyright status of the content you wish to share.

---

## 📲 Social & Contact

Follow me for more content on programming and tech:

- 🌍 Portfolio: [https://matheuschiodi.github.io/Portfolio/](https://matheuschiodi.github.io/Portfolio/)
- 💼 LinkedIn: [https://www.linkedin.com/in/matheus-chiodi](https://www.linkedin.com/in/matheus-chiodi)
- 🐙 GitHub: [https://github.com/MatheusChiodi](https://github.com/MatheusChiodi)
- 📷 Instagram: [https://www.instagram.com/mchiodidev](https://www.instagram.com/mchiodidev)
- ▶️ YouTube: [https://www.youtube.com/@MChiodiDev](https://www.youtube.com/@MChiodiDev)
- ▶️ TikTok: [https://www.tiktok.com/@mchiodidev](https://www.tiktok.com/@mchiodidev)

---

**Enjoy, learn, and share with the community!** 🚀
