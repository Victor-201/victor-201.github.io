import React from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[60px] overflow-hidden bg-brand-700/10 backdrop-blur-[1.5px] z-50 ove">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-10 w-10 rounded-full border"
          />
          <span className="font-bold text-xl">Victor Nguyen</span>
        </div>
        {/* Navigation */}
        <nav className="flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-blue-500 transition-colors font-medium text-xl"
            >
              {item.label}
            </a>
          ))}
          {/* Theme Toggle */}
          <div className="">
          </div>
        </nav>
      </div>
    </header>
  );
}
