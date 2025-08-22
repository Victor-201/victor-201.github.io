import { useEffect, useState } from "react";

export default function useTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof localStorage !== "undefined" && localStorage.theme) {
      return localStorage.theme === "dark";
    }
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return { darkMode, setDarkMode, toggleTheme: () => setDarkMode((p) => !p) };
}
