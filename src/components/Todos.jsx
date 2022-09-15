import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import Controls from "./Controls";
import Todo from "./Todo";
import { AnimatePresence, Reorder } from "framer-motion";

export default function Todos() {
  const { todos, dispatch } = useContext(TodoContext);
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
      <div className="rounded-md w-full shadow-xl bg-white dark:bg-[#25273c] pt-1 relative md:w-[55%] md:max-w-lg md:min-w-[512px]">
        <Reorder.Group values={todoState} onReorder={setTodoState}>
          <AnimatePresence>
            {todoState.map((todo) => (
              <Reorder.Item key={todo.id} value={todo}>
                <Todo key={todo.id} todo={todo} />
              </Reorder.Item>
            ))}
          </AnimatePresence>
        </Reorder.Group>
        <div className="flex justify-between items-center p-[12px] text-[hsl(0, 0%, 98%)] md:relative">
          <span className="text-xs font-semibold text-[#9394a5] dark:text-[#4d5066]">
            {todos.length} item(s) left
          </span>
          <span
            onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
            className="cursor-pointer text-xs font-semibold text-[#9394a5] dark:text-[#4d5066] hover:text-[#161722] dark:hover:text-[#e4e5f1]"
          >
            Clear Completed
          </span>
        </div>
      </div>
      <Controls
        getAll={getAll}
        getActive={getActive}
        getCompleted={getCompleted}
        current={current}
      />
      <span className="absolute -bottom-7 left-[50%] z-10 w-max -translate-x-[50%] text-sm text-[#d2d3db] dark:text-[#4d5066]">
        Drag and drop to reorder list
      </span>
    </>
  );
}
