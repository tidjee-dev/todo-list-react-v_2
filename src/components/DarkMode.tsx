import { useTheme } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="p-2 text-white rounded-full bg-dark dark:bg-secondary-subtle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light" && <FaSun className="text-warning-dark" size={24} />}
      {theme === "dark" && (
        <FaMoon className="text-secondary-light" size={24} />
      )}
    </button>
  );
};

export default DarkMode;
