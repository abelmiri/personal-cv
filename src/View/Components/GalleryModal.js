import React, {useState} from "react"
import ArrowSvg from "../../Media/SVG/ArrowSvg"
import GalleryThumbnail from "./GalleryThumbnail"

// const backMediaAddress = "http://86.106.142.44:3010/media/"
const backMediaAddress = "https://api.janatifard.ir/media/"

const GalleryModal = props =>
{
    const [count, setCount] = useState(0)
    const [imageLoaded, setImageLoaded] = React.useState(false)
    const {pictures, closeGallery} = props

    document.addEventListener("keyup", (ev =>
    {
        if (imageLoaded)
        {
            if (ev.code === "ArrowRight") next()
            if (ev.code === "ArrowLeft") previous()
            if (ev.code === "Escape") closeGallery()
        }
    }))

    const previous = e =>
    {
        if (pictures.length > 1)
        {
            e && e.stopPropagation()
            e && e.preventDefault()
            count !== 0 ? setCount(count - 1) : setCount(pictures.length - 1)
            setImageLoaded(false)
        }
    }

    const next = e =>
    {
        if (pictures.length > 1)
        {
            e && e.stopPropagation()
            e && e.preventDefault()
            count !== pictures.length - 1 ? setCount(count + 1) : setCount(0)
            setImageLoaded(false)
        }
    }

    return (
        <React.Fragment>
            {
                pictures.length > 1 &&
                <div className="gallery-arrow-container previous" onClick={(e) => previous(e)}>
                    <ArrowSvg className="gallery-back-arrow"/>
                </div>
            }
            <img className={`gallery-modal-picture smooth-image image-${imageLoaded ? "visible" : "hidden"}`}
                 src={backMediaAddress + pictures[count]} alt={count} onLoad={() => setImageLoaded(true)}/>
            {
                pictures.length > 1 &&
                <div className="gallery-arrow-container next" onClick={(e) => next(e)}>
                    <ArrowSvg className="gallery-next-arrow"/>
                </div>
            }
            <GalleryThumbnail backMediaAddress={backMediaAddress} pictures={pictures} index={count} setIndex={setCount}/>
        </React.Fragment>
    )
}

export default GalleryModal