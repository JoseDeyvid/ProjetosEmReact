import React from 'react'
import "./styles.css"

const SelectCurrency = ({name, title, options, optionSelected, handleChangeOption}) => {
    return (
        <div className="select-group">
            <label htmlFor={name}>{title}</label>
            <select name={name} id={name} value={optionSelected} onChange={handleChangeOption}>
                {Object.keys(options).map((option, i) => (
                    <option value={option} key={i}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectCurrency