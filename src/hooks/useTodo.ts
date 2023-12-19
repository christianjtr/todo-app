import { useContext } from "react";
import { TODO_ACTION_TYPES } from '../contexts/TodoContext/action-types';
import { TodoContext, TodoContextType } from "../contexts/TodoContext/TodoContext";
import { Task } from "../types/Task";

interface useTodoInterface {
    addTask: (description: Task['description']) => void;
    tasks: Task[];
}

const useTodo = (): useTodoInterface => {

    const { state, dispatch } = useContext(TodoContext) as TodoContextType;

    const addTask = (description: Task['description']): void => {
        
        dispatch({type: TODO_ACTION_TYPES.ADD_TASK, payload: { task: {
            id: Math.random(),
            description,
            isDone: false,
            date: new Date(),
        }}})
    }

    return {
        addTask,
        tasks: state.tasks || [],
    }
}

export default useTodo;
