import React, { useState } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const Tareas = () => {
    const [tasks, setTasks] = useState([]);

    const addTask = (taskText) => {
        const newTask = {
            id: Date.now(),
            text: taskText,
            estado: false,
        };
        setTasks([...tasks, newTask]);
        };

        const marcarRealizada = (id) => {
            const updatedTasks = tasks.map(task =>
              task.id === id ? { ...task, estado: true } : task 
            );
            setTasks(updatedTasks);  
          };

          const eliminarTarea = (id) => {
            const updatedTasks = tasks.filter(task => task.id !== id);
            setTasks(updatedTasks);
        };

        return (
            <div>
              <h2>Tareas</h2>
              <TaskInput onAddTask={addTask} />
              <TaskList 
                tasks={tasks}
                cambiarEstado={marcarRealizada}
                borrar={eliminarTarea}
              />
            </div>
          );
        };
        
export default Tareas;
