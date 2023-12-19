import React from "react";
import useTodo from "../../../hooks/useTodo.ts";

const AddTaskForm: React.FC = (): React.ReactElement => {
    const { addTask } = useTodo();

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const task = formData.get("task");
        if (task && typeof task === "string") {
            addTask(task);
            resetForm();
        }
    };

    const resetForm = (): void => {
        (document.getElementById("addTaskForm") as HTMLFormElement)?.reset();
    };

    return (
        <form id="addTaskForm" name="addTaskForm" onSubmit={handleOnSubmit}>
            <h3 className="has-text-left is-size-5 mb-3">
                Add a new task here
            </h3>
            <div className="mb-5">
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
                            required
                        />
                    </div>
                    <div className="control">
                        <button
                            id="addTaskBtn"
                            name="addTaskBtn"
                            type="submit"
                            form="addTaskForm"
                            className="button is-link"
                            title="Add"
                            aria-label="Add task"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddTaskForm;
