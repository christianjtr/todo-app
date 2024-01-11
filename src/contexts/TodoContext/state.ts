import { Task } from '../../types/Task';

export interface TodoStateInterface {
    tasks: Task[];
}

export const TodoState: TodoStateInterface = {
  tasks: [],
};
