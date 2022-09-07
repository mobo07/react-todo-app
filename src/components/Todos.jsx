import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import Controls from "./Controls";
import Todo from "./Todo";

export default function Todos() {
  const { todos } = useContext(TodoContext);
  const [todoState, setTodoState] = useState([]);
  const [current, setCurrent] = useState("all");

  useEffect(() => {
    setTodoState(todos);
    setCurrent("all");
  }, [todos]);

  const getAll = () => {
    setTodoState(todos);
    setCurrent("all");
  };
  const getActive = () => {
    const active = todos.filter((todo) => !todo.completed);
    setTodoState(active);
    setCurrent("active");
  };
  const getCompleted = () => {
    const complete = todos.filter((todo) => todo.completed);
    setTodoState(complete);
    setCurrent("completed");
  };

  return (
    <>
      <div className="rounded-md w-full shadow-xl bg-white pt-1 md:w-[55%] md:max-w-lg md:min-w-[512px]">
        {todoState.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
        <div className="flex justify-between items-center p-[12px] text-[hsl(0, 0%, 98%)] md:relative">
          <span>5 items left</span>
          <span className="cursor-pointer">Clear Completed</span>
        </div>
      </div>
      <Controls
        getAll={getAll}
        getActive={getActive}
        getCompleted={getCompleted}
        current={current}
      />
    </>
  );
}

// box-shadow: -2px 15px 27px 0px rgba(0,0,0,0.75);
