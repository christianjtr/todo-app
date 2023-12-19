import { TodoStateInterface } from './state';
import { TodoActionTypes, TODO_ACTION_TYPES } from './action-types';

const TodoActions = (state: TodoStateInterface, action: TodoActionTypes): TodoStateInterface => {
  switch(action.type) {
    case TODO_ACTION_TYPES.ADD_TASK: {
        const { tasks } = state;
        const { task: newTask } = action.payload;
        const taskCollection: TodoStateInterface['tasks']  = [...tasks, newTask];
        
        return {
            ...state,
            tasks: taskCollection,
        };
    }
    default: {
        throw new Error('Unhandled action type');
    }
  }
};

export default TodoActions;
