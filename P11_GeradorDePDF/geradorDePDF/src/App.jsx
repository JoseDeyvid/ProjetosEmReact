
import { useState } from 'react';
import './App.css'
import TextStyles from './components/TextStyles'
import UploadImage from './components/UploadImage'
import UserInputs from './components/UserInputs'

import pdfMake from "pdfmake/build/pdfmake";
import "pdfmake/build/vfs_fonts";


function App() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [fontSize, setFontSize] = useState('12')
  const [txtColor, setTxtColor] = useState('#000000')
  const [isBold, setIsBold] = useState(false)
  const [imageToPdf, setImageToPdf] = useState(null)

  const handleGeneratePDF = () => {
    const fontSizeInt = Number(fontSize)
    var docDefinition = {
      content: [
        title,
        description,
        imageToPdf ? { image: imageToPdf, width: 200 } : {}
      ],
      defaultStyle: {
        fontSize: fontSizeInt,
        color: txtColor,
        bold: isBold
      }
    }

    pdfMake.createPdf(docDefinition).open()
  }

  return (
    <div className="container">
      <header>
        <h1>Gerador de PDF</h1>
      </header>
      <main className='content'>
        <UserInputs title={title} setTitle={setTitle} description={description} setDescription={setDescription} />
        <TextStyles fontSize={fontSize} setFontSize={setFontSize} txtColor={txtColor} setTxtColor={setTxtColor} isBold={isBold} setIsBold={setIsBold} />
        <UploadImage imageToPdf={imageToPdf} setImageToPdf={setImageToPdf} />
        <button onClick={handleGeneratePDF}>Gerar PDF</button>
      </main>
    </div>
  )
}

export default App
