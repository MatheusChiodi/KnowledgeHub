const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "..", "public", "PDFs");
const output = [];

// Função que ajusta o nome do arquivo para exibição
const formatName = (filename) =>
  filename
    .replace(/\.pdf$/i, "") // remove a extensão
    .replace(/-/g, " ") // troca hifens por espaços
    .trim(); // remove espaços extras

const getAllPDFs = (folderName) => {
  const folderPath = path.join(baseDir, folderName);
  const files = fs.readdirSync(folderPath);

  return files
    .filter((file) => file.endsWith(".pdf"))
    .map((file) => ({
      name: formatName(file),
      url: `/PDFs/${folderName}/${file}`,
    }));
};

fs.readdirSync(baseDir).forEach((folder) => {
  const pdfs = getAllPDFs(folder);
  if (pdfs.length > 0) {
    output.push({
      id: Math.random().toString(36).substring(2, 8),
      name: folder,
      description: `Arquivos relacionados a ${folder}`,
      icon: "FileText",
      pdfs,
    });
  }
});

fs.writeFileSync(
  path.join(baseDir, "pdfs.json"),
  JSON.stringify(output, null, 2),
);

console.log("✅ Arquivo pdfs.json gerado com sucesso!");
