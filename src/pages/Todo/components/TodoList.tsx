import React from "react";
import { Task } from "../../../types/Task";
import TaskItem from "./TaskItem";

interface TodoListProps {
    tasks: Task[];
}

const TodoList: React.FC<TodoListProps> = (props): React.ReactElement => {
    const { tasks = [] } = props;

    return (
        <>
            <h3 className="has-text-left is-size-5 mb-3">TODO's</h3>
            <div className="box has-background-white-ter">
                {tasks.map((task, index) => (
                    <TaskItem key={index} />
                ))}
            </div>
        </>
    );
};

export default TodoList;
