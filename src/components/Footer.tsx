import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
 return (
    <footer className="mx-auto max-w-5xl px-6 justify-center">
      <div className="container mx-auto flex justify-center gap-7 mt-3 mb-3">
        <a   href="https://twitter.com/dev_eslan" target="_blank" rel="noopener noreferrer" className="hover:text-red-500" aria-label="Twitter">
          <FaTwitterSquare size={30} />
        </a>
        <a href="https://github.com/eslansa" target="_blank" rel="noopener noreferrer" className="hover:text-red-500" aria-label="GitHub">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/eslan-sanchez-alvarez-346773241/" target="_blank" rel="noopener noreferrer" className="hover:text-red-500" aria-label="LinkedIn">
          <FaLinkedin size={30} />
        </a>
      </div>
    </footer>
 );
};

export default Footer;
