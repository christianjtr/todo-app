import React, { useReducer } from "react";
import { TodoContext } from "./TodoContext";
import { TodoState } from "./state";
import TodoActions from "./actions";

export interface TodoProviderProps {
    children: React.ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({
    children,
}): React.ReactElement => {
    const [state, dispatch] = useReducer(TodoActions, TodoState);
    const value = { state, dispatch };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};
