import React from 'react';
import { Provider } from 'react-redux';
import store from './reducers/store';
import TaskCreator from './components/TaskCreator';
import TasksList from './components/TasksList';

function App() {
  return (
      <Provider store={ store }>
        <div className="App">
          <TaskCreator />
          <TasksList />
        </div>
      </Provider>
  );
}

export default App;
