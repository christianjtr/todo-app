import React from "react";

const TaskItem: React.FC = (): React.ReactElement => {
    return (
        <div className="level has-background-white p-3 mb-3">
            <div className="level-left">
                <div className="level-item">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            id="checkTask"
                            name="checkTask"
                            aria-label="Check task"
                            title="Check task"
                        />
                        <span className="mx-2">...Task...</span>
                    </label>
                </div>
            </div>
            <div className="level-right">
                <div className="buttons">
                    <button
                        id="editTaskBtn"
                        name="editTaskBtn"
                        aria-label="Edit task"
                        title="Edit"
                        className="button is-small"
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
                    >
                        <span className="icon is-small">
                            <i className="fas fa-trash" aria-hidden="true" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
