
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import Album from './components/Album';

function App() {

  const [topics, setTopics] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [searchTxt, setSearchTxt] = useState("");
  const url = "https://api.unsplash.com"

  useEffect(() => {
    const loadTopics = async () => {
      const res = await axios.get("/topics", {
        baseURL: url,
        params: {
          client_id: import.meta.env.VITE_UNSPLASH_API
        }
      });
      setTopics(res.data);
    }
    loadTopics();
  }, [])

  useEffect(() => {
    const loadPhotos = async () => {
      if (!selectedTopic) {
        const res = await axios.get("/photos", {
          baseURL: url,
          params: {
            client_id: import.meta.env.VITE_UNSPLASH_API
          }
        });
        setPhotos([...res.data]);
      } else {
        const res = await axios.get(`/topics/${selectedTopic}/photos`, {
          baseURL: url,
          params: {
            client_id: import.meta.env.VITE_UNSPLASH_API
          }
        })
        setPhotos([...res.data]);
      }
    }
    loadPhotos()
  }, [selectedTopic])

  const handleSearch = async() => {
    const res = await axios.get("/search/photos", {
      baseURL: url,
      params: {
        client_id: import.meta.env.VITE_UNSPLASH_API,
        query: searchTxt
      }
    })
    setPhotos([...res.data.results])
  }

  return (
    <div>
      <input type="text" name="search-bar" id="search-bar" value={searchTxt} onChange={(e) => setSearchTxt(e.target.value)} />
      <button onClick={handleSearch}>Pesquisar</button>
      {topics.length > 0 &&
        <select value={selectedTopic} onChange={(e) => setSelectedTopic(e.target.value)}>
          <option value={""}>All</option>
          {topics.map((topic, i) => (
            <option key={topic.id} value={topic.id}>
              {/* {console.log("Id: ", topic)} */}
              {topic.slug}
            </option>
          ))}
        </select>
      }

      {photos.length > 0 && < Album photos={photos} />}

    </div>
  )
}

export default App
