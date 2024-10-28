import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNewTask } from '../slices/todoSlice'

const AddTask = () => {
    const dispatch = useDispatch();
    const [task, setTask] = useState('');

    const handleAddNewtask = () => {
        if (!task.trim())
            return
        
        dispatch(addNewTask(task));
        setTask('');

    }
    return (
        <div>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='Adicione uma tarefa...' />
            <button onClick={handleAddNewtask}>Enviar</button>
        </div>
    )
}

export default AddTask