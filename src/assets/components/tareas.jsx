import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Tareas = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        const newTask = {
            id: Date.now(),
            text: taskText,
        };
        setTasks([...tasks, newTask]);
        };
  
    return (
    <div>
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} />
    </div>
    );
};

export default Tareas;
