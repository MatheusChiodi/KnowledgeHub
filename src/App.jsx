import { useState, useEffect } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import FoldersDisplay from "./components/FoldersDisplay";
import ScrollToTopButton from "./components/ScrollToTopButton";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300); 

    return () => clearTimeout(timeout); 
  }, [searchTerm]);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col justify-between bg-gray-100">
      <Header setSearchTerm={setSearchTerm} />
      <div className="h-[70px]"></div>
      <div className="px-3">
        <Welcome />
        <FoldersDisplay searchTerm={debouncedSearch} />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
