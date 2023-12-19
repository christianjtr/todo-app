import React from "react";
import TaskItem from "./TaskItem";
import useTodo from "../../../hooks/useTodo.ts";

const TodoList: React.FC = (): React.ReactElement => {
    const { tasks } = useTodo();

    return (
        <>
            <h3 className="has-text-left is-size-5 mb-3">TODO's</h3>
            <div className="box has-background-white-ter">
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} />
                ))}
            </div>
        </>
    );
};

export default TodoList;
