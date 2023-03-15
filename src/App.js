import './App.css'
import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import { createResource as fetchData } from './helper'
import { render } from '@testing-library/react'
import Spinner from './components/Spinner'

function App() {
  let [search, setSearch] = useState('')
  let [message, setMessage] = useState('Search for Music!')
  let [data, setData] = useState(null)

  useEffect(() => {
    if (search.length) {
      document.title = `${search} Music`
      setData(fetchData(search))
    }
  }, [search])

  const handleSearch = (e, term) => {
    e.preventDefault()
    setSearch(term)
  }

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery data={data} />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
      <h1>
        {message}
      </h1>
      <SearchBar handleSearch={handleSearch} />
      {renderGallery()}
    </div >
  );
}

export default App;
