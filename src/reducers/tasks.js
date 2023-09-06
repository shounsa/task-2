import { ADD_TASK } from '../actions/types';

const initialState = {
    tasks: [],
};

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        default:
            return state;
    }
};

export default tasksReducer;
