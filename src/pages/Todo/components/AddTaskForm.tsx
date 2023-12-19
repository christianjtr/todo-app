import React from "react";

const AddTaskForm: React.FC = (): React.ReactElement => {
    return (
        <form id="addTaskForm" name="addTaskForm">
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
