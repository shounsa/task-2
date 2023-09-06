import { createStore, combineReducers } from 'redux';
import tasksReducer from './tasks';

// Je Combine mes reducers si nécessaire
const rootReducer = combineReducers({
    tasks: tasksReducer,
});

// Je Crée le store Redux en utilisant les reducers combinés
const store = createStore(
    rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Intégration de Redux DevTools
);

export default store;
