import React from 'react';
import { connect } from 'react-redux';

const TasksList = ({ tasks }) => {
    // J'Utilise la méthode map pour boucler à travers les tâches et générer les éléments de liste

    const groupedTasks = tasks.reduce((acc, task) => {
        if (!acc[task.taskName]) {
            acc[task.taskName] = { taskId: task.taskId, taskName: task.taskName, timeElapsed: 0 };
        }
        acc[task.taskName].timeElapsed += task.timeElapsed; // somme des task ayant le meme nom
        acc[task.taskName].taskId = task.taskId; // Affecter le dernier Id a la tache portant le meme nom

        // Je concerve l'ID le plus bas de toutes les tâches correspondantes
        if (task.taskId < acc[task.taskName].taskId) {
            acc[task.taskName].taskId = task.taskId;
        }
        return acc;
    }, {});

    // Convertir les tâches groupées en tableau et trier par ordre décroissant d'ID
    const sortedTasks = Object.values(groupedTasks).sort((a, b) => b.taskId - a.taskId);

    const taskItems = sortedTasks.map((task) => (
        <li key={task.taskId} className="task">
            <span className="id">Task ID: {task.taskId} </span>
            <span className="name">Task Name: {task.taskName} </span>
            <span className="time">Task Elapsed Time: {task.timeElapsed} </span>
        </li>
    ));

    // Je Calcule le temps total en utilisant la méthode reduce
    const totalTime = tasks.reduce((total, task) => total + task.timeElapsed, 0);

    return (
        <div>
            <ul id="tasks"> {taskItems} </ul>
            <div id="total">Total Time: {totalTime}</div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.tasks.tasks,
});

export default connect(mapStateToProps)(TasksList);

