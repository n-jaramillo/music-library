import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

function Gallery() {
    let data = useContext(DataContext).result.read()

    const display = () => {
        if (data.length > 0) {
            let displayData = data.map((item, index) => {
                return (
                    <GalleryItem item={item} key={index} />
                )
            })
            return displayData
        } else {
            return (
                <h2 className='styledHeader'>Could Not Find Music</h2>
            )
        }
    }

    return (
        <div>
            {display()}
        </div>
    )
}

export default Gallery