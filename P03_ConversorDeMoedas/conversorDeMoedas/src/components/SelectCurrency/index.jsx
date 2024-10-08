import React from 'react'

const SelectCurrency = ({title, options}) => {
    return (
        <div className="input-group">
            <label htmlFor="currency-converted">para</label>
            <select name="currency-converted" id="currency-converted">
                {options.map((option) => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectCurrency