import { renderHook, act } from '@testing-library/react';
import { TodoActionTypes } from '../../contexts/TodoContext/action-types';
import * as TaskServices from '../../services/taskService';

import useTodo from '../../hooks/useTodo';

/**
 * Example on how to test a custom react hook...
 */

jest.mock('../../services/taskService');

const mockDispatch: jest.Mock<TodoActionTypes> = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: () => ({
        dispatch: () => mockDispatch(),
        state: {
            tasks: [],
        }
    }),
}));

describe('useTodo custom hook', () => {
    
    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should has the proper props and functions', () => {

        const {
          result: { current },
        } = renderHook(() => useTodo());
        
        const {
            tasks,
            totalTasksDone,
            addTask,
            checkTaskById,
            editTaskById,
            deleteTaskById
        } = current;
    
        expect(tasks).toStrictEqual([]);
        expect(totalTasksDone).toBe(0);
        expect(typeof addTask === 'function').toBeTruthy();
        expect(typeof checkTaskById === 'function').toBeTruthy();
        expect(typeof editTaskById === 'function').toBeTruthy();
        expect(typeof deleteTaskById === 'function').toBeTruthy();
    });

    describe('addTask method', () => {
        const { result: { current: { addTask } } } = renderHook(() => useTodo());
        
        it('should execute the method properly', async () => {
            
            jest.useFakeTimers().setSystemTime(new Date('2023-12-01'));
            Math.random = jest.fn().mockReturnValue(1234567);
            (TaskServices.storeTasks as jest.Mock) = jest.fn();
            
            const task = {
                id: Math.random(),
                description: 'Task description',
                isDone: false,
                date: new Date(),
            };

            expect(addTask).toBeInstanceOf(Function);
            act(() => {
                addTask(task.description);
            });

            expect(mockDispatch).toHaveBeenCalled();
            expect(TaskServices.storeTasks).toHaveBeenCalledWith([task]);

            jest.useRealTimers();
        });
    });

    describe('checkTaskById method', () => {
        const { result: { current: { checkTaskById } } } = renderHook(() => useTodo());
        
        it('should execute the method properly', async () => {
            
            (TaskServices.storeTasks as jest.Mock) = jest.fn();

            expect(checkTaskById).toBeInstanceOf(Function);
            act(() => {
                checkTaskById(1, true);
            });

            expect(mockDispatch).toHaveBeenCalled();
            expect(TaskServices.storeTasks).toHaveBeenCalledWith([]);
        });
    });

    describe('editTaskById method', () => {
        const { result: { current: { editTaskById } } } = renderHook(() => useTodo());
        
        it('should execute the method properly', async () => {
            
            (TaskServices.storeTasks as jest.Mock) = jest.fn();

            const task = {
                id: Math.random(),
                description: 'Task description',
                isDone: false,
                date: new Date(),
            };

            expect(editTaskById).toBeInstanceOf(Function);
            act(() => {
                editTaskById(1, task.description);
            });

            expect(mockDispatch).toHaveBeenCalled();
            expect(TaskServices.storeTasks).toHaveBeenCalledWith([]);
        });
    });

    describe('deleteTaskById method', () => {
        const { result: { current: { deleteTaskById } } } = renderHook(() => useTodo());
        
        it('should execute the method properly', async () => {
            
            (TaskServices.storeTasks as jest.Mock) = jest.fn();

            expect(deleteTaskById).toBeInstanceOf(Function);
            act(() => {
                deleteTaskById(1);
            });

            expect(mockDispatch).toHaveBeenCalled();
            expect(TaskServices.storeTasks).toHaveBeenCalledWith([]);
        });
    });
});
