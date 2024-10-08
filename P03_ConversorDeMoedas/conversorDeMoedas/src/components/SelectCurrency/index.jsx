import React from 'react'
import "./styles.css"

const SelectCurrency = ({title, options, optionSelected, handleChangeOption}) => {
    return (
        <div className="select-group">
            <label htmlFor="currency-converted">{title}</label>
            <select name="currency-converted" id="currency-converted" value={optionSelected} onChange={handleChangeOption}>
                {Object.keys(options).map((option, i) => (
                    <option value={option} key={i}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectCurrency