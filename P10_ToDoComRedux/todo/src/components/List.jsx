import React, { useState } from 'react'
import './ListStyles.css'
import { useDispatch, useSelector } from 'react-redux'
import { completeTask, deleteTask, changeFilter } from '../slices/todoSlice';

const List = () => {
    const { list, filter } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const renderedList = list.filter((task) => {
        if (filter === 'all') return true;
        if (filter === 'completeTasks') return task.completed
        if (filter === 'incompleteTasks') return !task.completed
        return true
    });

    const handleCompleteTask = (id) => {
        dispatch(completeTask(id))
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }
    const handleChangeFilter = (txtFilter) => {
        dispatch(changeFilter(txtFilter))
    }

    return (
        <div className='list-container'>
            <div className="status-options">
                <button onClick={() => handleChangeFilter('all')}>Todas</button>
                <button onClick={() => handleChangeFilter('completeTasks')}>Completas</button>
                <button onClick={() => handleChangeFilter('incompleteTasks')}>Incompletas</button>
            </div>
            <div className="list">
                {renderedList.map((task) => (
                    <div key={task.id} className={`task ${task.completed ? 'completed' : ''}`} onClick={() => handleCompleteTask(task.id)}>
                        <p>{task.task}</p>
                        <button onClick={() => handleDeleteTask(task.id)}>Remover</button>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default List