import { Task } from "../types/Task";

export enum TASK_STORAGE_KEYS {
    TASKS = 'TASKS',
}

const checkTasks = (): boolean => {
    return !!localStorage.getItem(TASK_STORAGE_KEYS.TASKS);
} 

const storeTasks = (tasks: Task[]): void => {
    localStorage.setItem(TASK_STORAGE_KEYS.TASKS, JSON.stringify(tasks));
}

const getTasks = (): Task[] => {
    if(checkTasks()) {
        const tasks = JSON.parse(localStorage.getItem(TASK_STORAGE_KEYS.TASKS)!);
        return tasks.map((task: Task) => ({
            ...task,
            date: new Date(task.date)
        }));
    }
    return [];
}

const deleteTasks = (): void => {
    localStorage.removeItem(TASK_STORAGE_KEYS.TASKS);    
}

export {
    checkTasks,
    storeTasks,
    getTasks,
    deleteTasks
}
