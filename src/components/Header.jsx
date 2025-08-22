import React from "react";
import ToggleButton from "./ThemeToggle";
import useNavUnderline from "../hooks/useNavUnderline";
import useActiveHash from "../hooks/useActiveHash";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const NavLink = React.memo(({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
));

export default function Header() {
  const activeHash = useActiveHash("#home");
  const { navRefs, underlineStyle, setHoverIndex } = useNavUnderline(navItems, activeHash);

  return (
    <header className="fixed top-0 left-0 w-full h-[var(--header-height)] bg-brand-700/10 backdrop-blur-[1.5px] z-50 flex items-center">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-xl text-gradient">Victor</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6 relative">
          {navItems.map((item, idx) => {
            const isActive = item.href === activeHash;
            return (
              <NavLink
                key={item.label}
                href={item.href}
                ref={el => (navRefs.current[idx] = el)}
                className={`
                  relative font-medium text-xs transition-colors duration-300
                  ${isActive ? "text-gradient" : "text-white"}
                `}
                onMouseEnter={e => {
                  setHoverIndex(idx);
                  if (!isActive) e.target.classList.add("text-gradient");
                }}
                onMouseLeave={e => {
                  setHoverIndex(null);
                  if (!isActive) e.target.classList.remove("text-gradient");
                }}
              >
                {item.label}
              </NavLink>
            );
          })}

          {/* Animated underline */}
          <div
            className="absolute bottom-0 h-[2px] rounded-sm transition-all duration-300 ease-in-out z-[1]"
            style={{ ...underlineStyle, backgroundImage: "var(--nav-gradient)" }}
          />

          {/* Theme Toggle */}
          <ToggleButton />
        </nav>
      </div>
    </header>
  );
}
