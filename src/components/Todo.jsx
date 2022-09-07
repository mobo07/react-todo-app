import { useContext } from "react";
import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
import { TodoContext } from "../context/TodoContext";

export default function Todo({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <div
      className={`flex items-center justify-between p-[12px] bg-white w-full border-b-[1px] border-b-[hsl(0, 0%, 98%)]`}
    >
      <div className="flex items-center w-full">
        <span
          onClick={() => {
            dispatch({ type: "COMPLETE", payload: todo.id });
          }}
          className={`w-[15px] h-[15px] rounded-full border-[1px] border-[hsl(0, 0%, 98%)] mr-3 cursor-pointer flex items-center justify-center ${
            todo.completed ? "bg-pink-500" : ""
          }`}
        >
          {todo.completed && (
            <img className="" src={checkIcon} alt="check-icon" />
          )}
        </span>
        <p
          className={`ml-[5px] text-sm text-[hsl(236, 33%, 92%)] font-semibold ${
            todo.completed ? "line-through text-slate-400" : ""
          }`}
        >
          {todo.item}
        </p>
      </div>
      <img
        className="cursor-pointer w-[12px]"
        src={crossIcon}
        alt="cross-icon"
        onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}
      />
    </div>
  );
}
