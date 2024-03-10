import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-5xl px-6 justify-center">
      <div className="container mx-auto flex justify-center gap-7 mt-3 mb-3">
        <Link href="https://twitter.com/dev_eslan">
          <span className="hover:text-red-500">
            <FaTwitterSquare size={30} />{" "}
          </span>
        </Link>
        <Link href="https://github.com/eslansa">
          <span className="hover:text-red-500">
            <FaGithub size={30} />
          </span>
        </Link>
        <Link href="#">
          <span className="hover:text-red-500">
            <FaLinkedin size={30} />
          </span>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
