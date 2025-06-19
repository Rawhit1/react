import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
      <div className="w-full h-6 bg-gray-200 dark:bg-gray-700 rounded-full relative">
        <div
          className={`absolute top-0.5 left-0.5 w-5 h-5
             bg-white rounded-full shadow-md transition-transform 
             ${ theme === "dark" ? "translate-x-5" : "" }`}
        />
      </div>
      <span className="ml-3 text-sm">{theme === "dark" ? "Dark" : "Light"} Mode</span>
    </label>
  );
}
