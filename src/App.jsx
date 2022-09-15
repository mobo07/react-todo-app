import Header from "./components/Header";
import Todos from "./components/Todos";
import { TodoContext } from "./context/TodoContext";
import { useContext, useEffect } from "react";

function App() {
  const { dispatch } = useContext(TodoContext);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  return (
    <div className="relative h-screen overflow-x-hidden bg-white dark:bg-[#161722]">
      <Header />
      <div className="p-4 absolute w-full top-[120px] md:flex md:items-center md:flex-col">
        <Todos />
      </div>
    </div>
  );
}

export default App;
