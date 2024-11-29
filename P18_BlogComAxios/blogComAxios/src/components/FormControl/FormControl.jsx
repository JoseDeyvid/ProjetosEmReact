import "./FormControl.css"
import React from 'react'

const FormControl = ({ labelTitle, id, value, setValue, placeholder }) => {
    return (
        <div className='formControl'>
            <label htmlFor={id}>{labelTitle}</label>
            <input type="text" id={id} name={id} value={value} onChange={setValue} placeholder={placeholder}/>
        </div>
    )
}

export default FormControl