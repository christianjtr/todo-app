import React from "react";
import { AddTaskForm, TodoList } from "./components";

const Todo: React.FC = (): React.ReactElement => {
    const tasks = [1, 2, 3];

    return (
        <div className="columns is-centered">
            <div className="column is-7-widescreen">
                <AddTaskForm />
                <TodoList tasks={tasks} />
            </div>
        </div>
    );
};

export default Todo;
