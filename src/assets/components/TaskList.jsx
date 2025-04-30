import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task) => (
            <TaskItem key={task.id} text={task.text} />
        ))}
        </ul>
);
};

export default TaskList;
