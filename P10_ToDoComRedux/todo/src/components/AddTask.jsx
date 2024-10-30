import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTask } from '../slices/todoSlice'
import './AddTask.css'

const AddTask = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const handleAddNewtask = (e) => {
        e.preventDefault()
        if (!task.trim())
            return

        dispatch(addNewTask(task));
        setTask('');

    }
    return (
        <form>
            <div className='add-task-container'>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Adicione uma tarefa...' />
                <button onClick={handleAddNewtask}>Adicionar</button>
            </div>
        </form>
    )
}

export default AddTask