import { Task } from '../../types/Task';

export enum TODO_ACTION_TYPES {
    ADD_TASK = 'ADD_TASK',
}

export type TodoActionTypes = { type: TODO_ACTION_TYPES.ADD_TASK; payload: { task: Task; } }

