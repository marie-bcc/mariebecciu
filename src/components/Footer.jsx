import React from "react";
import { FaGithub, FaLinkedin, FaBriefcase } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer items-center p-4 bg-white text-gray-900">
      <aside className="items-center grid-flow-col">
        <p>Copyright © 2023 - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://github.com/marie-bcc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl fill-current" />
        </a>
        <a
          href="https://www.linkedin.com/in/marie-becciu-630904212/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-2xl fill-current" />
        </a>
        <a
          href="https://www.malt.fr/profile/mariebecciu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBriefcase className="text-2xl fill-current" />{" "}
          {/* Icône générique pour Malt */}
        </a>
      </nav>
    </footer>
  );
}
