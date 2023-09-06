import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../actions/tasks';

const TaskCreator = ({ addTask }) => {
    const [taskId, setTaskId] = useState(1);
    const [taskName, setTaskName] = useState('');
    const [timeElapsed, setTimeElapsed] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleStart = () => {
        if (!isRunning) {
            setInterval(() => {
                setTimeElapsed((prevTimeElapsed) => prevTimeElapsed + 1);
            }, 1000)

            setIsRunning(true);
        }
    };

    const handleStop = () => {
        if (timeElapsed === 0) {
            // Ignorer l'enregistrement si le temps écoulé est égal à 0
            return;
        }

        setTimeout(() => {

            addTask({
                taskId,
                taskName,
                timeElapsed,
            });

            setTaskName('');
            setTimeElapsed(0);
            setTaskId(taskId + 1)
        }, 0);
    };
    return (
        <div>
            <input
                type="text"
                placeholder="Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Elapsed Time (seconds)"
                value={timeElapsed}
                onChange={(e) => setTimeElapsed(parseInt(e.target.value))}
            />
            <button onClick={handleStart}> START </button>
            <button onClick={handleStop}> STOP </button>
        </div>
    );
};

export default connect(null, { addTask })(TaskCreator);
