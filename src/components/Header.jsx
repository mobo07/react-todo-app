import { useContext, useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";
import { TodoContext } from "../context/TodoContext";
import { generateId } from "../utils/generateId";

export default function Header() {
  const { todos, dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState("");
  const [themeIcon, setThemeIcon] = useState("");

  const newTodo = (e) => {
    e.preventDefault();
    let todoObj = { id: generateId(), item: todo.trim(), completed: false };
    if (todo.trim().length > 0)
      dispatch({ type: "ADD_TODO", payload: todoObj });
    setTodo("");
  };

  const handleTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      setThemeIcon("light");
    } else {
      document.documentElement.classList.add("dark");
      setThemeIcon("dark");
    }
  };

  return (
    <div className="items-center w-full p-4 h-[200px] bg-[url('./assets/images/bg-mobile-light.jpg')] dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] bg-cover md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')] md:flex md:flex-col">
      <div className="flex justify-between items-center text-white mb-4 mt-6 w-full md:w-[55%] md:max-w-lg md:min-w-[512px]">
        <h1 className="text-2xl font-bold tracking-[10px]">TODO</h1>
        <span className="theme-btn w-[20px] h-[20px] cursor-pointer">
          <img
            onClick={handleTheme}
            className="w-full h-full object-cover"
            src={themeIcon === "dark" ? sunIcon : moonIcon}
            alt="moon-icon"
          />
        </span>
      </div>
      <form
        className="w-full bg-white dark:bg-[#25273c] rounded-md p-[10px] flex items-center md:w-[55%] md:max-w-lg md:min-w-[512px]"
        onSubmit={newTodo}
      >
        <span className="w-[15px] h-[15px] rounded-full border-[1px] border-[hsl(0, 0%, 98%)] flex-2 mr-3"></span>
        <input
          className="flex-7 h-full w-full outline-none bg-white dark:bg-[#25273c] dark:text-[#cacde8]"
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </form>
    </div>
  );
}
