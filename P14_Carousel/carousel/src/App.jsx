import { useState } from 'react'
import './App.css'

function App() {

  const [selectedImage, setSelectedImage] = useState(0);
  const [images] = useState([
    "https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp",
    "https://static.vecteezy.com/ti/vetor-gratis/p1/9169455-ceu-dourado-por-do-sol-na-costa-natureza-paisagem-vetor.jpg",
    "https://static.preparaenem.com/2024/04/2-paisagem-nos-alpes.jpg"

  ])

  const handleClickPreviousImg = () => {
    if (selectedImage === 0) {
      setSelectedImage(images.length - 1);
    } else {
      setSelectedImage((prevSelectedImage) => prevSelectedImage - 1);
    }
  }

  const handleClickNextImg = () => {
    if (selectedImage === images.length - 1) {
      setSelectedImage(0);
    } else {
      setSelectedImage((prevSelectedImage) => prevSelectedImage + 1);
    }
  }

  return (
    <div className='container'>
      <h2>Carousel</h2>
      <main className="content">
        <img src={images[selectedImage]} />
        <button onClick={handleClickPreviousImg} className='btn-previous'>Anterior</button>
        <button onClick={handleClickNextImg} className='btn-next'>Próximo</button>
        <div className="bullets">
          {images.map((image, i) => (
            <div key={i} className={`bullet ${i === selectedImage ? "selected" : ""}`}></div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
