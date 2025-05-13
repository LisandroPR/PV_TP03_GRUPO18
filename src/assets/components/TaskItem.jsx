import React from 'react';

const TaskItem = ({ task, cambiarEstado, borrar }) => {
    return(
        <li>
            <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            {task.text}
            </span>
            <button onClick={() => cambiarEstado(task.id)}>Realizada</button>
            <button onClick={() => borrar(task.id)}>Eliminar</button>
        </li>
    );
};


export default TaskItem;
