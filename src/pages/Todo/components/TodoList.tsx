import React from "react";
import TaskItem from "./TaskItem";
import useTodo from "../../../hooks/useTodo.ts";
import NotFoundStateImage from "../../../assets/not-found.jpg";

const TodoList: React.FC = (): React.ReactElement => {
    const { tasks } = useTodo();

    const fallbackImage = (
        <img
            src={NotFoundStateImage}
            alt="Not found state image"
            width="40%"
            className="is-align-self-center"
        />
    );

    return (
        <>
            <h3 className="has-text-left is-size-5 mb-3">TODO's</h3>
            <div className="box">
                {tasks.length === 0
                    ? fallbackImage
                    : tasks.map((task) => (
                          <TaskItem key={task.id} task={task} />
                      ))}
            </div>
        </>
    );
};

export default TodoList;
