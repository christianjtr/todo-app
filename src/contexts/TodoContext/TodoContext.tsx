import { createContext } from "react";
import { TodoStateInterface } from "./state";
import { TodoActionTypes } from "./action-types";

export type TodoContextType = {
    state: TodoStateInterface;
    dispatch: React.Dispatch<TodoActionTypes>;
};

export const TodoContext = createContext<TodoContextType | undefined>(
    undefined
);
