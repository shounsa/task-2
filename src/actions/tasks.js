import { ADD_TASK } from './types';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});
