import './App.css'
import { useEffect, useState, Suspense } from 'react';
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  const API_URL = 'https://itunes.apple.com/search?term='

  const entity = '&kind=music'

  useEffect(() => {
    if (search) {
      setData(fetchData(search))
      // const fetchData = async () => {
      //   document.title = `${search} Music`
      //   const response = await fetch(API_URL + search + entity)
      //   const resData = await response.json()
      //   console.log(resData)
      //   if (resData.results.length > 0) {
      //     setData(resData.results)
      //   } else {
      //     setMessage('Not Found')
      //   }
      // }
      // fetchData()
    }
  }, [search])


  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  return (
    <div className="App">
      <h1>
        {message}
      </h1>
      <SearchBar handleSearch={handleSearch} />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Gallery data={data} />
      </Suspense>
    </div >
  );
}

export default App;
