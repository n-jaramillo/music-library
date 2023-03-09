function SearchBar(props) {
    return (
        <form>
            <input type="text" placeholder="Enter a search term here" onChange={(e) => props.handleSearch(e, e.target.value)} onSubmit={(e) => props.handleSearch(e, '')} />
            <button type="submit">Reset</button>
        </form>
    )
}

export default SearchBar