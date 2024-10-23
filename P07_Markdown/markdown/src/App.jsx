import { useRef, useState } from 'react'
import './App.css'
import Toolbar from './components/Toolbar'
import { marked } from 'marked';

function App() {

  const [text, setText] = useState("# Hello world!");
  const textAreaRef = useRef();

  const handleOutput = (before, after) => {
    const selectionStartId = textAreaRef.current.selectionStart
    const selectionEndId = textAreaRef.current.selectionEnd

    // console.log(textAreaRef.current.value.substring(0, selectionStartId))

    const textBefore = textAreaRef.current.value.substring(0, selectionStartId)
    const textAfter = textAreaRef.current.value.substring(selectionEndId, textAreaRef.current.value.length)
    const textSelected = textAreaRef.current.value.substring(selectionStartId, selectionEndId)

    const newText = `${textBefore}${before}${textSelected}${after}${textAfter}`
    setText(newText);
  }

  const createMarked = () => {
    return (
      { __html: marked(text) }
    )
    
  }

  return (
    <div className='container'>
      <Toolbar handleOnClick={handleOutput} />
      <textarea name="text" id="text" value={text} onChange={(e) => setText(e.target.value)} ref={textAreaRef}></textarea>
      <div className='output' dangerouslySetInnerHTML={createMarked()} />
    </div>
  )
}

export default App
