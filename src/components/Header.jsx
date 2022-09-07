import { useContext, useState } from "react";
import moonIcon from "../assets/images/icon-moon.svg";
import { TodoContext } from "../context/TodoContext";
import { generateId } from "../utils/generateId";

export default function Header() {
  const { todos, dispatch } = useContext(TodoContext);
  const [todo, setTodo] = useState("");

  const newTodo = (e) => {
    e.preventDefault();
    let todoObj = { id: generateId(), item: todo, completed: false };
    dispatch({ type: "ADD_TODO", payload: todoObj });
    setTodo("");
  };

  return (
    <div className="items-center w-full p-4 h-[20vh] bg-[url('./assets/images/bg-mobile-light.jpg')] bg-cover md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:flex md:flex-col md:h-[25vh]">
      <div className="flex justify-between items-center text-white mb-4 mt-6 w-full md:w-[55%] md:max-w-lg md:min-w-[512px]">
        <h1 className="text-2xl font-bold tracking-[10px]">TODO</h1>
        <span className="w-[20px] h-[20px] cursor-pointer">
          <img
            className="w-full h-full object-cover"
            src={moonIcon}
            alt="moon-icon"
          />
        </span>
      </div>
      <form
        className="w-full bg-white rounded-md p-[10px] flex items-center md:w-[55%] md:max-w-lg md:min-w-[512px]"
        onSubmit={newTodo}
      >
        <span className="w-[15px] h-[15px] rounded-full border-[1px] border-[hsl(0, 0%, 98%)] flex-2 mr-3"></span>
        <input
          className="flex-7 h-full w-full outline-none bg-white"
          type="text"
          placeholder="Create a new todo..."
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
      </form>
    </div>
  );
}
