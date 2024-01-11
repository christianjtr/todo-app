import React, { useState } from "react";
import EditTaskForm from "./EditTaskForm";
import { Task } from "../../../types/Task";
import useTodo from "../../../hooks/useTodo";

interface TaskItemInterface {
    task: Task;
}

const TaskItem: React.FC<TaskItemInterface> = (props): React.ReactElement => {
    const { task } = props;
    const { checkTaskById, deleteTaskById } = useTodo();
    const [isEditMode, setIsEditMode] = useState<boolean>(false);

    const handleOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        checkTaskById(task.id, (event.target as HTMLInputElement).checked);
    };

    const handleOnEditTask = (): void => {
        setIsEditMode(!isEditMode);
    };

    const handleOnDeleteTask = (): void => {
        deleteTaskById(task.id);
    };

    return (
        <div className="has-background-white-ter p-3 my-2">
            <div className="level">
                <div className="level-left is-flex is-flex-direction-column is-align-items-flex-start">
                    <div className="level-item mb-1 has-text-left">
                        <label className="checkbox is-unselectable">
                            <input
                                type="checkbox"
                                id="checkTask"
                                name="checkTask"
                                className="mr-2"
                                aria-label="Check task"
                                title="Check task"
                                checked={task.isDone}
                                onChange={handleOnChange}
                            />
                            {task.description}
                        </label>
                    </div>
                    <div className="level-item is-size-7 has-text-grey-light is-unselectable">
                        <i className="fa fa-calendar" aria-hidden="true" />
                        <span className="mx-2">{task.date.toUTCString()}</span>
                    </div>
                </div>
                <div className="level-right">
                    <div className="buttons">
                        <button
                            id="editTaskBtn"
                            name="editTaskBtn"
                            aria-label="Edit task"
                            title="Edit"
                            className={`button is-small ${
                                isEditMode && "is-link"
                            }`}
                            onClick={handleOnEditTask}
                        >
                            <span className="icon is-small">
                                <i className="fas fa-edit" aria-hidden="true" />
                            </span>
                        </button>
                        <button
                            id="deleteTaskBtn"
                            name="deleteTaskBtn"
                            aria-label="Delete task"
                            title="Delete"
                            className="button is-small"
                            onClick={handleOnDeleteTask}
                        >
                            <span className="icon is-small">
                                <i
                                    className="fas fa-trash"
                                    aria-hidden="true"
                                />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            {isEditMode && (
                <EditTaskForm formData={task} onEditTask={handleOnEditTask} />
            )}
        </div>
    );
};

export default TaskItem;
