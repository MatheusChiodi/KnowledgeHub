import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-5 bg-gray-800 text-white shadow-2xl">
      <div className="flex flex-wrap items-center justify-center gap-4 py-4 md:gap-0">
        <p className="text-md text-gray-400">
          © {currentYear} Todos os direitos reservados
        </p>
        <p className="text-md mx-3 hidden text-gray-400 md:block">|</p>
        <p className="text-md text-gray-400">
          Desenvolvido por{" "}
          <a
            href="https://matheuschiodi.github.io/Portfolio/"
            target="_blank"
            className="hover:text-dracula-red/80 mx-1 bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text font-semibold text-transparent"
            rel="noopener noreferrer"
          >
            Matheus Chiodi
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
