import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchInput from './components/SearchInput'
import TopAnime from './components/TopAnime'

const baseURL = 'https://kitsu.io/api/edge/'

function App() {
  const [textInput, setTextInput] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      if (textInput) {
        await fetch(`${baseURL}anime?filter[text]=${textInput}&page[limit]=12`)
          .then(response => response.json())
          .then(data => {
            setInfo(data)
            console.log(data)
          })
      }
    }
    fetchData()
  }, [textInput])

  return (
    <div className="container-search-anime">
      <Header />
      <SearchInput value={textInput} onChange={e => setTextInput(e)} />
      {/* <TopAnime /> */}

      {textInput && !info.data && <h1> Carregando...</h1>}

      {info.data && (
        <ul className="list-anime">
          {info.data.map(item => (
            <li key={item.id}>
              <img
                src={item.attributes.posterImage.small}
                alt={item.attributes.canonicalTitle}
              />
              <h4>{item.attributes.canonicalTitle}</h4>
              <div className="columns">
                <p>
                  <strong>Classificação: </strong>
                  {item.attributes.averageRating}
                </p>
                <p>
                  <strong>Episódios: </strong>
                  {item.attributes.episodeCount}
                </p>
              </div>
              <a
                href={`https://www.youtube.com/watch?v=${item.attributes.youtubeVideoId}`}
                target="_blank"
              >
                Vídeo
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
