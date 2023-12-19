import { useContext } from "react";
import { TODO_ACTION_TYPES } from '../contexts/TodoContext/action-types';
import { TodoContext, TodoContextType } from "../contexts/TodoContext/TodoContext";
import { Task } from "../types/Task";

interface useTodoInterface {
    tasks: Task[];
    addTask: (description: string) => void;
    checkTask: (taskId: number, isDone: boolean) => void;
    deleteTask: (taskId: number) => void;
}

const useTodo = (): useTodoInterface => {

    const { state, dispatch } = useContext(TodoContext) as TodoContextType;

    const addTask = (description: string): void => {
        dispatch({type: TODO_ACTION_TYPES.ADD_TASK, payload: { task: {
            id: Math.random(),
            description,
            isDone: false,
            date: new Date(),
        }}})
    }

    const checkTask = (taskId: number, isDone: boolean): void => {
        dispatch({type: TODO_ACTION_TYPES.CHECK_TASK, payload: { taskId, isDone }});
    }

    const deleteTask = (taskId: number): void => {
        dispatch({type: TODO_ACTION_TYPES.DELETE_TASK, payload: { taskId }});
    }

    return {
        tasks: state.tasks || [],
        addTask,
        checkTask,
        deleteTask
    }
}

export default useTodo;
