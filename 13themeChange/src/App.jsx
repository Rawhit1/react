import ThemeToggle from "./components/ThemeToggle.jsx";
import Card from "./components/Card";

export default function App() {
  return (
    <div className="w-full py-8 flex flex-wrap min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-100 dark:bg-gray-900 transition-all">
      <ThemeToggle />
      <Card />
    </div>
  );
}
