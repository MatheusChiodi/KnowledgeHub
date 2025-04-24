import { useEffect, useState } from "react";

export function usePDFsFromLocal() {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    const fetchFromLocal = async () => {
      try {
        const res = await fetch("/KnowledgeHub/PDFs/pdfs.json"); 
        if (!res.ok) throw new Error("Erro ao buscar o JSON local");

        const data = await res.json();
        setFolders(data);
      } catch (err) {
        console.error("❌ Falha ao carregar JSON local:", err);
      }
    };

    fetchFromLocal();
  }, []);

  return folders;
}
