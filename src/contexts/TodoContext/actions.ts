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
    case TODO_ACTION_TYPES.POPULATE_TASK_COLLECTION: {
      const { tasks: newTaskCollection } = action.payload;
      
      return {
          ...state,
          tasks: newTaskCollection,
      };
    }
    case TODO_ACTION_TYPES.CHECK_TASK: {
      const { tasks } = state;
      const { taskId, isDone } = action.payload;
      
      const matchTask = tasks.find(({ id }) => taskId === id)!;
      matchTask.isDone = isDone;
      
      const taskCollection = tasks.map((task) => task.id === taskId && matchTask ? matchTask : task);

      return {
        ...state,
        tasks: taskCollection
      }
    }
    case TODO_ACTION_TYPES.EDIT_TASK: {
      const { tasks } = state;
      const { taskId, task } = action.payload;
      
      const matchTask = tasks.find(({ id }) => taskId === id)!;
      const editedTask = {
        ...matchTask,
        description: task.description,
        date: task.date,
      };

      const taskCollection = tasks.map((task) => task.id === taskId && editedTask ? editedTask : task);

      return {
        ...state,
        tasks: taskCollection
      }
    }
    case TODO_ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { taskId } = action.payload;
      
      const taskCollection = tasks.filter((task) => task.id !== taskId);

      return {
        ...state,
        tasks: taskCollection
      }
    }
    default: {
        throw new Error('Unhandled action type');
    }
  }
};

export default TodoActions;
