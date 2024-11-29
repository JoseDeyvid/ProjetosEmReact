import React from 'react'

const FormControl = ({ labelTitle, id, value, setValue }) => {
    return (
        <div className='formControl'>
            <label htmlFor={id}>{labelTitle}</label>
            <input type="text" id={id} name={id} value={value} onChange={setValue} />
        </div>
    )
}

export default FormControl