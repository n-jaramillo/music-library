import { useState } from "react"
import { Link } from "react-router-dom"

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleView = () => {
        return (
            <div className='simple'>
                <div className='simpleHeader'>
                    <h3>{props.item.trackName}</h3>
                    <h3>{props.item.collectionName}</h3>
                </div>
                <img src={props.item.artworkUrl100} alt={props.item.collectionName} className='simpleBG' />
            </div >
        )
    }

    const detailView = () => {
        let release = new Date(props.item.releaseDate).getFullYear()
        return (
            <div className='detailed'>
                <img src={props.item.artworkUrl100} alt={props.item.collectionName} style={{ 'borderRadius': '3px', 'margin': '0 0 10px' }} />
                <h2 style={{ 'fontVariant': 'small-caps', 'margin': '0 0 10px' }}>{props.item.trackName}</h2>
                <h3 style={{ 'margin': '0 0 5px' }}>
                    <Link to={`/artist/${props.item.collectionId}`}>
                        {props.item.artistName}
                    </Link>
                </h3>
                <h3 style={{ 'margin': '0 0 -5px' }}>
                    <Link to={`/album/${props.item.collectionId}`}>
                        {props.item.collectionName}
                    </Link>
                </h3>
                <h4>{props.item.primaryGenreName}<br />{release}</h4>
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)} className='container'>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem