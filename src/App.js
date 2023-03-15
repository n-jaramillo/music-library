import './App.css'
import { useState, Fragment, useRef, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

// Context and Helper Components
import { DataContext } from './context/DataContext'
import { SearchContext } from './context/SearchContext'
import { createResource as fetchData } from './helper'
import Spinner from './components/Spinner'

function App() {
  let [data, setData] = useState(null)
  let searchInput = useRef('')

  const handleSearch = async (e, term) => {
    e.preventDefault()
    document.title = `${term} Music`
    setData(fetchData(term))
  }

  const renderGallery = () => {
    if (data) {
      return (
        <Suspense fallback={<Spinner />}>
          <Gallery />
        </Suspense>
      )
    }
  }

  return (
    <div className="App">
      <h1>
        Search for Music!
      </h1>
      <Router>
        <Routes>
          <Route path="/" element={
            <Fragment>
              <SearchContext.Provider value={{
                term: searchInput,
                handleSearch: handleSearch
              }}>
                <SearchBar />
              </SearchContext.Provider>
              <DataContext.Provider value={data}>
                {renderGallery()}
              </DataContext.Provider>
            </Fragment>
          } />
          <Route path="/album/:id" element={<AlbumView />} />
          <Route path="/artist/:id" element={<ArtistView />} />
        </Routes>
      </Router >
    </div >
  );
}

export default App;
