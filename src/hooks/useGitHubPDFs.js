import { useEffect, useState } from "react";

export function useGitHubPDFs() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/repos/MatheusChiodi/knowledgehub/contents/PDFs"
        );
        const data = await res.json();

        const grouped = {};

        data.forEach((file) => {
          if (file.name.endsWith(".pdf")) {
            const [rawCategory, ...nameParts] = file.name.split(" - ");
            const category = rawCategory.trim();
            const name = nameParts.join(" - ").replace(".pdf", "").trim();

            if (!grouped[category]) grouped[category] = [];
            grouped[category].push({ name, url: file.download_url });
          }
        });

        const folderList = Object.entries(grouped).map(([name, pdfs], idx) => ({
          id: idx + 1,
          name,
          description: `Arquivos relacionados a ${name}`,
          icon: "FileText",
          pdfs,
        }));

        setFolders(folderList);
      } catch (err) {
        console.error("Erro ao buscar PDFs do GitHub:", err);
      }
    };

    fetchPDFs();
  }, []);

  return folders;
}
