import { Task } from '../../types/Task';

export enum TODO_ACTION_TYPES {
    ADD_TASK = 'ADD_TASK',
    POPULATE_TASK_COLLECTION = 'POPULATE_TASK_COLLECTION',
    CHECK_TASK = 'CHECK_TASK',
    EDIT_TASK = 'EDIT_TASK',
    DELETE_TASK = 'DELETE_TASK'
}

export type TodoActionTypes = 
    | { type: TODO_ACTION_TYPES.ADD_TASK; payload: { task: Task; } } 
    | { type: TODO_ACTION_TYPES.POPULATE_TASK_COLLECTION; payload: { tasks: Task[]; } } 
    | { type: TODO_ACTION_TYPES.CHECK_TASK, payload: { taskId: number; isDone: boolean; } }
    | { type: TODO_ACTION_TYPES.EDIT_TASK, payload: { taskId: number; task: Pick<Task, "description" | "date">; } }
    | { type: TODO_ACTION_TYPES.DELETE_TASK, payload: { taskId: number } }

