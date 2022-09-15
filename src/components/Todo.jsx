import { useContext } from "react";
import crossIcon from "../assets/images/icon-cross.svg";
import checkIcon from "../assets/images/icon-check.svg";
import { TodoContext } from "../context/TodoContext";
import { motion } from "framer-motion";

const todoVariants = {
  hidden: { x: "-100vw" },
  visible: { x: 0 },
  exit: { x: "100vw", transition: { ease: "easeInOut", delay: 0.25 } },
};

// const todoVariants = {
//   hidden: { scale: 0 },
//   visible: { scale: 1, transition: { duration: 0.25 } },
//   exit: { scale: 0, transition: { delay: 0.25 } },
// };

export default function Todo({ todo }) {
  const { dispatch } = useContext(TodoContext);

  return (
    <motion.div
      variants={todoVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex items-center justify-between p-[12px] bg-white dark:bg-[#25273c] w-full border-b-[1px] border-b-[hsl(0, 0%, 98%)] dark:border-b-[#4d5066]`}
    >
      <div className="flex items-center w-full">
        <span
          onClick={() => {
            dispatch({ type: "COMPLETE", payload: todo.id });
          }}
          className={`w-[15px] h-[15px] rounded-full border-[1px] border-[hsl(0, 0%, 98%)] dark:border-[#4d5066] mr-3 cursor-pointer flex items-center justify-center ${
            todo.completed ? "bg-pink-500" : ""
          }`}
        >
          {todo.completed && (
            <img className="" src={checkIcon} alt="check-icon" />
          )}
        </span>
        <p
          className={`ml-[5px] text-sm text-[hsl(236, 33%, 92%)] font-semibold ${
            todo.completed
              ? "line-through text-[#d2d3db] dark:text-[#4d5066]"
              : "text-[#484b6a] dark:text-[#cacde8]"
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
    </motion.div>
  );
}
