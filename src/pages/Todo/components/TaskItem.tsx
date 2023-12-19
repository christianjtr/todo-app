import React from "react";
import { Task } from "../../../types/Task";

interface TaskItemInterface {
    task: Task;
}

const TaskItem: React.FC<TaskItemInterface> = (props): React.ReactElement => {
    const { task } = props;

    return (
        <div className="level has-background-white p-3 mb-3">
            <div className="level-left is-flex is-flex-direction-column is-align-items-flex-start">
                <div className="level-item mb-1">
                    <label className="checkbox">
                        <input
                            type="checkbox"
                            id="checkTask"
                            name="checkTask"
                            className="mr-2"
                            aria-label="Check task"
                            title="Check task"
                            checked={task.isDone}
                        />
                        {task.description}
                    </label>
                </div>
                <div className="level-item is-size-7 has-text-grey-light">
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
