import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { completeTask, deleteTask } from '../slices/todoSlice';

const List = () => {
    const { list } = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleCompleteTask = (id) => {
        dispatch(completeTask(id))
    }

    const handleDeleteTask = (id) => {
        dispatch(deleteTask(id))
    }

    return (
        <div>
            <div className="status-options">
                <button>Todas</button>
                <button>Completas</button>
                <button>incompletas</button>
            </div>
            <div className="list">
                {list.map((task) => (
                    <div className='task' key={task.id} onClick={() => handleCompleteTask(task.id)}>
                        <p>{task.task}</p>
                        <button onClick={() => handleDeleteTask(task.id)}>Remover</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default List