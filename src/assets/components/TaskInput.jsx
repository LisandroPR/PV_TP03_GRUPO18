import React, { useState } from 'react';

const TaskInput = ({ onAdd }) => {
    const [input, setInput] = useState('');

    const noRecargar = (e) => {
        e.preventDefault(); //para que no se recargue la pag
        if (input.trim()) { //verifica que no este vacio
        onAdd(input);
        setInput('');
        }
};

    return (
        <form onSubmit={noRecargar}>
        <input
            type="text"
            placeholder="Nueva tarea..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Agregar</button>
    </form>
    );
};


export default TaskInput;

