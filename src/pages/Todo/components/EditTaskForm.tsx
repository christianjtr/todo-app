import React from "react";
import { Task } from "../../../types/Task";
import useTodo from "../../../hooks/useTodo.ts";

interface EditTaskProps {
    formData: Task;
    onEditTask: () => void;
}

const EditTaskForm: React.FC<EditTaskProps> = (props): React.ReactElement => {
    const {
        formData: { id, description },
        onEditTask,
    } = props;

    const { editTask } = useTodo();

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const task = formData.get("task");
        if (task && typeof task === "string") {
            editTask(id, task);
            onEditTask();
        }
    };

    return (
        <form id="editTaskForm" name="editTaskForm" onSubmit={handleOnSubmit}>
            <div className="field has-addons">
                <div className="control is-flex is-flex-grow-1">
                    <input
                        id="task"
                        name="task"
                        type="text"
                        className="input"
                        placeholder="Enter task"
                        aria-label="Enter task"
                        autoComplete="off"
                        minLength={3}
                        maxLength={50}
                        defaultValue={description}
                        autoFocus
                        required
                    />
                </div>
                <div className="control">
                    <button
                        id="editTaskBtn"
                        name="editTaskBtn"
                        type="submit"
                        form="editTaskForm"
                        className="button"
                        title="Edit"
                        aria-label="Edit task"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </form>
    );
};

export default EditTaskForm;
