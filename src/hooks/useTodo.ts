import { useContext } from "react";
import * as TaskServices from '../services/taskService';
import { TODO_ACTION_TYPES } from '../contexts/TodoContext/action-types';
import { TodoContext, TodoContextType } from "../contexts/TodoContext/TodoContext";
import { Task } from "../types/Task";

interface useTodoInterface {
    tasks: Task[];
    totalTasksDone: number;
    addTask: (description: string) => void;
    checkTaskById: (taskId: number, isDone: boolean) => void;
    editTaskById: (taskId: number, description: string) => void;
    deleteTaskById: (taskId: number) => void;
}

const useTodo = (): useTodoInterface => {

    const { state: { tasks }, dispatch } = useContext(TodoContext) as TodoContextType;

    const addTask = (description: string): void => {
        const task = {
            id: Math.random(),
            description,
            isDone: false,
            date: new Date(),
        }
        
        dispatch({type: TODO_ACTION_TYPES.ADD_TASK, payload: { task }});
        TaskServices.storeTasks([...tasks, task]);
    }

    const checkTaskById = (taskId: number, isDone: boolean): void => {
        dispatch({type: TODO_ACTION_TYPES.CHECK_TASK, payload: { taskId, isDone }});
        TaskServices.storeTasks(tasks.map((task) => task.id === taskId ? { ...task, isDone } : task ));
    }

    const editTaskById = (taskId: number, description: string): void => {
        const editedTask = {
            description,
            date: new Date(),
        }
        
        dispatch({type: TODO_ACTION_TYPES.EDIT_TASK, payload: { taskId, task: editedTask }});
        TaskServices.storeTasks(tasks.map((task) => task.id === taskId ? { ...task, ...editedTask } : task ));
    }

    const deleteTaskById = (taskId: number): void => {
        dispatch({type: TODO_ACTION_TYPES.DELETE_TASK, payload: { taskId }});
        TaskServices.storeTasks(tasks.filter((task) => task.id !== taskId));
    }

    return {
        tasks: tasks || [],
        totalTasksDone: tasks.filter(({isDone}) => isDone).length,
        addTask,
        checkTaskById,
        editTaskById,
        deleteTaskById
    }
}

export default useTodo;
