import { useEffect, useState } from "react";

export function useGitHubPDFs() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const baseUrl =
          "https://api.github.com/repos/MatheusChiodi/KnowledgeHub/contents/public/PDFs";
        const folderRes = await fetch(baseUrl);
        const folderData = await folderRes.json();

        const validFolders = folderData.filter((item) => item.type === "dir");

        const promises = validFolders.map(async (folder) => {
          const res = await fetch(`${baseUrl}/${folder.name}`);
          const files = await res.json();

          const pdfs = files
            .filter((file) => file.name.endsWith(".pdf"))
            .map((file) => ({
              name: file.name.replace(".pdf", "").trim(),
              url: file.download_url,
            }));

          return {
            id: folder.sha.slice(0, 6), // ou use um contador se preferir número sequencial
            name: folder.name,
            description: `Arquivos relacionados a ${folder.name}`,
            icon: "FileText",
            pdfs,
          };
        });

        const results = await Promise.all(promises);
        setFolders(results);
      } catch (err) {
        console.error("Erro ao buscar PDFs do GitHub:", err);
      }
    };

    fetchPDFs();
  }, []);

  return folders;
}
