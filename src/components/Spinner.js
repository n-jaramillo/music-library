import loading from '../loading.gif'

const Spinner = () => {
    return (
        <div>
            <img src={loading} alt="loading..." />
            <h2 className='styledHeader'>Loading...</h2>
        </div>
    )
}

export default Spinner