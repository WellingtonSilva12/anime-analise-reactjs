import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchInput from './components/SearchInput'

const api = 'https://kitsu.io/api/edge/'

function App() {
  const [textInput, setTextInput] = useState('')
  const [info, setInfo] = useState({})

  useEffect(() => {
    if (textInput) {
      fetch(`${api}anime?filter[text]=${textInput}&page[limit]=12`)
        .then(response => response.json())
        .then(data => {
          setInfo(data)
          console.log(data)
        })
    }
  }, [textInput])

  return (
    <div className="App">
      <Header />
      <SearchInput value={textInput} onChange={e => setTextInput(e)} />

      {info.data && (
        <ul className="list-anime">
          {info.data.map(item => (
            <li key={item.id}>
              <img src={item.attributes.posterImage.small} alt="image anime" />
              <h4>{item.attributes.canonicalTitle}</h4>
              {/* <p>{item.attributes.synopsis}</p> */}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
