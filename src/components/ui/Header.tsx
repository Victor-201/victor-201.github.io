"use client";

import { Link, useLocation } from "react-router-dom";
import React from "react";

const LINKS = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Header = () => {
  const { pathname: activeRoute } = useLocation();
  return (
    <div className="w-screen flex justify-center items-center h-[60px] container-xl mx-auto px-4 absolute top-0">
      {activeRoute !== "/" && (
        <Link
          to={"/"}
          className="p-4 absolute top-0 left-2 text-sm duration-500 hover:text-zinc-300"
        >
          Home
        </Link>
      )}
      <nav>
        {LINKS.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className={`p-4 text-sm duration-500 text-zinc-500 hover:text-zinc-300 ${activeRoute === link.href ? "text-zinc-200" : ""
              }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
