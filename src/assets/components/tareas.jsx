import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Tareas = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            completed: false,
        };
        setTasks([...tasks, newTask]);
    };

    const cambiarEstado = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
        )
        );
    };

    const borrar = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <TaskInput onAdd={addTask} />
            <TaskList tasks={tasks} cambiarEstado={cambiarEstado} borrar={borrar} />
        </div>
    );
    };

export default Tareas;
