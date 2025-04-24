import { useEffect, useState } from "react";

export function usePDFs() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const githubURL =
      "https://api.github.com/repos/MatheusChiodi/KnowledgeHub/contents/public/PDFs";
    const localURL = "/KnowledgeHub/PDFs/pdfs.json"; // ajuste se não estiver hospedado em subpasta

    const fetchFromGitHub = async () => {
      try {
        const folderRes = await fetch(githubURL);
        if (!folderRes.ok) throw new Error("Erro ao buscar pastas");

        const folderData = await folderRes.json();
        const validFolders = folderData.filter((item) => item.type === "dir");

        const promises = validFolders.map(async (folder) => {
          const res = await fetch(`${githubURL}/${folder.name}`);
          if (!res.ok) return null;

          const files = await res.json();
          const pdfs = files
            .filter((file) => file.name.endsWith(".pdf"))
            .map((file) => ({
              name: file.name.replace(".pdf", "").replace(/-/g, " ").trim(),
              url: file.download_url,
            }));

          if (pdfs.length === 0) return null;

          return {
            id: folder.sha.slice(0, 6),
            name: folder.name,
            description: `Arquivos relacionados a ${folder.name}`,
            icon: "FileText",
            pdfs,
          };
        });

        const results = (await Promise.all(promises)).filter(Boolean);
        if (results.length === 0) throw new Error("Nenhum PDF encontrado");
        setFolders(results);
      } catch (err) {
        console.warn("⚠️ API do GitHub falhou. Usando JSON local:", err);
        fetchFromLocal();
      }
    };

    const fetchFromLocal = async () => {
      try {
        const res = await fetch(localURL);
        if (!res.ok) throw new Error("Erro ao carregar JSON local");

        const data = await res.json();
        setFolders(data);
      } catch (err) {
        console.error("❌ Falha ao carregar JSON local:", err);
      }
    };

    fetchFromGitHub();
  }, []);

  return folders;
}
