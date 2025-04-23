import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { FileText, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useGitHubPDFs } from "../hooks/useGitHubPDFs";

export default function FoldersDisplay({ searchTerm = "" }) {
  const [activeFolderId, setActiveFolderId] = useState(null);
  const folders = useGitHubPDFs();

  const handleToggle = (id) => {
    setActiveFolderId((prev) => (prev === id ? null : id));
  };

  const toSlug = (text) => text.toLowerCase().replace(/\s+/g, "-");

  const filteredFolders = folders
    .map((folder) => ({
      ...folder,
      pdfs: folder.pdfs.filter((pdf) =>
        pdf.name.toLowerCase().includes(searchTerm),
      ),
    }))
    .filter((folder) => folder.pdfs.length > 0);

  return (
    <div className="mx-auto mt-10 w-full scroll-smooth">
      {filteredFolders.map((folder) => (
        <motion.div
          key={folder.id}
          id={toSlug(folder.name)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700 shadow-2xl"
        >
          <button
            onClick={() => handleToggle(folder.id)}
            className="flex w-full items-center justify-between px-5 pt-5 text-left text-xl font-bold text-white transition hover:text-[#ff5555]"
          >
            <div className="flex items-center gap-2">
              {LucideIcons[folder.icon] &&
                React.createElement(LucideIcons[folder.icon], {
                  className: "h-5 w-5 text-[#ff5555]",
                })}
              <span>{folder.name}</span>
            </div>
            <span>{activeFolderId === folder.id ? "▲" : "▼"}</span>
          </button>

          <p className="mt-2 px-5 pb-5 text-justify text-sm text-gray-300 md:mt-0">
            {folder.description}
          </p>

          <AnimatePresence>
            {activeFolderId === folder.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="px-5 pb-5"
              >
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {folder.pdfs.map((pdf, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between rounded-xl bg-gray-700 p-3 shadow-lg transition hover:shadow-xl"
                    >
                      <div className="flex items-center gap-3">
                        <p className="pe-2 text-sm font-medium leading-snug text-white">
                          {pdf.name}
                        </p>
                      </div>
                      <a
                        href={pdf.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded bg-gray-600 px-3 py-1 text-sm font-semibold text-white transition hover:bg-[#ff5555]/80"
                      >
                        <Download className="h-7 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
