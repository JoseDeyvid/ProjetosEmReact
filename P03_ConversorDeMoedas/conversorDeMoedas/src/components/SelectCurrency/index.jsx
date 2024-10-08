import React from 'react'
import "./styles.css"

const SelectCurrency = ({title, options}) => {
    return (
        <div className="select-group">
            <label htmlFor="currency-converted">{title}</label>
            <select name="currency-converted" id="currency-converted">
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectCurrency