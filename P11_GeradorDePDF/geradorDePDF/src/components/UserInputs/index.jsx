import React from 'react'

const UserInputs = ({title, setTitle, description, setDescription}) => {
    return (
        <div>
            <label>
                Título
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </label>
            <label>
                Descrição
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
        </div>

    )
}

export default UserInputs