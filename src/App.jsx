import { useState, useEffect } from 'react'
import Header from './components/Header'
import SearchInput from './components/SearchInput'

function App() {
  const [textInput, setTextInput] = useState('')
  console.log(textInput)

  useEffect(() => {}, [])

  return (
    <div className="App">
      <Header />
      <SearchInput value={textInput} onChange={e => setTextInput(e)} />
    </div>
  )
}

export default App
