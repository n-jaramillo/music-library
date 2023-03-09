function SearchBar(props) {
    return (
        <form>
            <input type="text" placeholder="enter search term here" onChange={(e) => { props.handleSearch(e, (e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))) }} onSubmit={(e) => props.handleSearch(e, '')} />
            <br />
            <button type="submit">reset</button>
        </form>
    )
}

export default SearchBar