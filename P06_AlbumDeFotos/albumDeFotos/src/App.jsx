
import { useEffect, useState } from 'react'
import './App.css'
import axios from "./api"
import Album from './components/Album';
import SelectTopics from './components/SelectTopics';

function App() {

  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [searchTxt, setSearchTxt] = useState("");
  const url = "https://api.unsplash.com"

  useEffect(() => {
    const loadTopics = async () => {
      const res = await axios.get("/topics");
      setTopics(res.data);
    }
    loadTopics();
  }, [])

  useEffect(() => {
    const loadPhotos = async () => {
      if (!selectedTopic) {
        const res = await axios.get("/photos");
        setPhotos([...res.data]);
      } else {
        const res = await axios.get(`/topics/${selectedTopic}/photos`)
        setPhotos([...res.data]);
      }
    }
    loadPhotos()
  }, [selectedTopic])

  const handleSearch = async () => {
    const res = await axios.get("/search/photos", {
      params: {
        query: searchTxt,
      }
    })
    setPhotos([...res.data.results])
  }

  return (
    <div className='content'>
      <div className="search-group">
        <input type="text" name="search-bar" id="search-bar" placeholder='O que você está procurando?' value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
        <button onClick={handleSearch}>Pesquisar</button>
        {topics.length > 0 && <SelectTopics selectedTopic={selectedTopic} handleChangeSelectedTopic={(e) => setSelectedTopic(e.target.value)} topics={topics} />}
      </div>
      {photos.length > 0 && < Album photos={photos} />}
    </div>
  )
}

export default App
