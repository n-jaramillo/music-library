import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"

function SearchBar() {
    const { term, handleSearch } = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="enter search term here" onChange={(e) => { handleSearch(e, (term.current.value.charAt(0).toUpperCase() + term.current.value.slice(1))) }} onSubmit={(e) => handleSearch(e, '')} />
            <br />
            <button type="submit">reset</button>
        </form>
    )
}

export default SearchBar