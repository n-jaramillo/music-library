import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

function AlbumView() {
    const { id } = useParams()
    const [albumData, setAlbumData] = useState([])
    const navigate = useNavigate()

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => navigate(-1)}>back</button>
                <button onClick={() => navigate('/')}>home</button>
            </div>
        )
    }

    useEffect(() => {
        const API_URL = `http://localhost:4000/song/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const onlySongs = albumData.filter(entry => entry.wrapperType === 'track')

    const renderSongs = onlySongs.map((song, i) => {
        return (
            <div key={i}>
                <p>{song.trackName}</p>
            </div>
        )
    })

    return (
        <div style={{ color: "white" }}>
            {navButtons()}
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <h2>loading . . .</h2>}
            {renderSongs}
        </div>
    )
}

export default AlbumView