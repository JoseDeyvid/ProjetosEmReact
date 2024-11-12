import React from 'react'
import './styles.css'

const TextStyles = ({ fontSize, setFontSize, txtColor, setTxtColor, isBold, setIsBold }) => {

    return (
        <div className="textStyles">
            <label>Font size:
                <input type="number" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
            </label>
            <label>Font color:
                <input type="color" value={txtColor} onChange={(e) => setTxtColor(e.target.value)} />
            </label>
            <label>Bold:
                <input type="checkbox" value={isBold} onChange={(e) => setIsBold(!isBold)} />
            </label>
        </div>
    )
}

export default TextStyles