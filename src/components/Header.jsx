import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Header({ setSearchTerm }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed z-50 flex h-[60px] w-full items-center justify-between border-b border-white/10 bg-gray-800 px-6 text-white shadow-2xl backdrop-blur-md"
    >
      <div className="flex items-center gap-2 text-lg font-bold">
        <img src={`./logo.png`} alt="Logo" className="h-[36px] w-[36px]" />
        <h1 className="hidden text-xl md:block">KnowledgeHub</h1>
      </div>

      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Pesquisar..."
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          className="h-[34px] w-[250px] rounded-lg bg-white/90 px-4 text-gray-800 placeholder-gray-500 shadow-inner transition focus:outline-none focus:ring-2 focus:ring-[#ff5555]"
        />
        <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-600" />
      </div>
    </motion.div>
  );
}
