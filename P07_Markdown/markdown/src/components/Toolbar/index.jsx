import "./styles.css"

const Toolbar = ({handleOnClick}) => {
  return (
    <div className="toolbar-container">
        <button onClick={() => handleOnClick("# ", "")}>H1</button>
        <button onClick={() => handleOnClick("## ", "")}>H2</button>
        <button onClick={() => handleOnClick("**", "**")}>Bold</button>
        <button onClick={() => handleOnClick("*", "*")}>Italic</button>
        <button onClick={() => handleOnClick("[", "](https://)")}>Link</button>
        <button onClick={() => handleOnClick("``", "``")}>Code Block</button>
        <button onClick={() => handleOnClick("- ", "")}>List Item</button>
        <button onClick={() => handleOnClick("___", "")}>Horizontal Line</button>
    </div>
  )
}

export default Toolbar