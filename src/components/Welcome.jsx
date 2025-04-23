import React from "react";
import * as LucideIcons from "lucide-react";
import { ArrowBigDown } from "lucide-react";
import folders from "../contexts/folders";
import { motion } from "framer-motion";

export default function Welcome() {
  const infiniteFolders = [...folders, ...folders];

  return (
    <motion.div
      className="mt-5 flex w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-gray-700 p-6 shadow-2xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="mb-3 text-center text-xl font-extrabold text-gray-50 md:text-3xl">
        Seja bem-vindo ao{" "}
        <span className="bg-gradient-to-r from-[#ff5555] to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          KnowledgeHub
        </span>
        !
      </h1>

      <p className="my-2 text-center text-lg font-medium text-gray-300 md:px-10">
        Aqui você pode encontrar uma variedade de conteúdos e recursos para
        expandir seu conhecimento
      </p>

      <p className="mb-2 text-center text-lg font-medium text-gray-50 md:px-10 md:text-xl md:flex gap-2">
        Basta escolher um dos tópicos abaixo
        <ArrowBigDown className="mx-auto mt-2 h-6 w-6 animate-bounce text-[#ff5555]" />
      </p>

      <div className="relative md:mt-6 mt-2 w-full overflow-hidden rounded-md">
        <div className="animate-marquee flex w-max gap-4 px-4">
          {infiniteFolders.map((folder, idx) => (
            <a
              href={`#${folder.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={idx}
              className="flex min-w-[180px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-gray-700 p-4 text-center font-semibold text-white shadow-2xl transition duration-500 hover:bg-[#ff5555]"
            >
              {LucideIcons[folder.icon] &&
                React.createElement(LucideIcons[folder.icon], {
                  className: "h-5 w-5",
                })}
              {folder.name}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
