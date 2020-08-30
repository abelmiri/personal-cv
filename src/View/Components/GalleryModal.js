import React, {useState} from "react"
import ArrowSvg from "../../Media/SVG/ArrowSvg"

const GalleryModal = props =>
{
    const [count, setCount] = useState(0)
    const {pictures} = props

    const next = e =>
    {
        e.stopPropagation()
        e.preventDefault()
        count !== 0 ? setCount(count - 1) : setCount(pictures.length - 1)
    }

    const previous = e =>
    {
        e.stopPropagation()
        e.preventDefault()
        count !== pictures.length - 1 ? setCount(count + 1) : setCount(0)
    }

    return (
        <React.Fragment>
            <div className="gallery-arrow-container" onClick={(e) => previous(e)}>
                <ArrowSvg className="gallery-back-arrow"/>
            </div>
            <div><img className="gallery-modal-picture" src={pictures[count]} alt={count}/></div>
            <div className="gallery-arrow-container" onClick={(e) => next(e)}>
                <ArrowSvg className="gallery-next-arrow"/>
            </div>
        </React.Fragment>
    )
}

export default GalleryModal