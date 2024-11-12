import React from 'react'
import './styles.css'

const UserInputs = ({ title, setTitle, description, setDescription }) => {
    return (
        <div className='userInputs'>
            <label>
                Título:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Descrição:
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
        </div>

    )
}

export default UserInputs