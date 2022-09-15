import { createContext, useReducer } from "react";
import { reducer } from "./todoContextReducer";

const INITIAL_STATE = [];

export const TodoContext = createContext(INITIAL_STATE);

export const TodoContextProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, INITIAL_STATE);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
