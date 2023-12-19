import React from "react";
import { AddTaskForm, TodoList } from "./components";
import { TodoProvider } from "../../contexts/TodoContext/TodoProvider";

const Todo: React.FC = (): React.ReactElement => {
    return (
        <TodoProvider>
            <div className="columns is-centered">
                <div className="column is-7-widescreen">
                    <AddTaskForm />
                    <TodoList tasks={[]} />
                </div>
            </div>
        </TodoProvider>
    );
};

export default Todo;
