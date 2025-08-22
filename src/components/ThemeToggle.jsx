import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="px-3 py-2 rounded-xl shadow-soft bg-white/80 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-300/50 dark:border-slate-600/50 backdrop-blur hover:scale-105 transition"
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
