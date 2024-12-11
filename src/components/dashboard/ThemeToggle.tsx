// components/ThemeToggle.tsx
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2 rounded-full"
      >
        {theme === "dark" ? "🌙 Dark Mode" : "🌞 Light Mode"}
      </button>
    </>
  );
};

export default ThemeToggle;
