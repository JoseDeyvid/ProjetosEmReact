
import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

function App() {

  const [topics, setTopics] = useState([]);
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

  const test = () => {
    console.log(topics)
  }

  return (
    <div>
      <input type="text" name="search-bar" id="search-bar" />
      <button>Pesquisar</button>
      {topics.length > 0 &&
        <select>
          {topics.map((topic, i) => (
            <option key={topic.id} value={topic.slug}>
              {/* {console.log("Id: ", topic)} */}
              {topic.slug}
            </option>
          ))}
        </select>
      }

      <button onClick={test}>test</button>
    </div>
  )
}

export default App
