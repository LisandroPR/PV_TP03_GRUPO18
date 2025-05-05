import React, { useState } from 'react';

const TaskInput = ({ onAddTask }) => {
    const [inputValue, setInputValue] = useState('');

    const noRecargar = (e) => {
        e.preventDefault(); //para que no se recargue la pag
        if (inputValue.trim()) { //verifica que no este vacio
        onAddTask(inputValue);
        setInputValue('');
        }
};

    return (
        <form onSubmit={noRecargar}>
        <input
            type="text"
            placeholder="Nueva tarea..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Agregar</button>
    </form>
    );
};

export default TaskInput;