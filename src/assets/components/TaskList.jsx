import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, cambiarEstado, borrar }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    cambiarEstado={cambiarEstado}
                    borrar={borrar}
                />
            ))}
        </ul>
    );
}
export default TaskList;