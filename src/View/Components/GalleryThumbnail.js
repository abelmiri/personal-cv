import React from "react"

const GalleryThumbnail = (props) =>
{
    const {pictures, backMediaAddress, index, setIndex} = props
    return (
        <div className="gallery-thumb-container" onClick={(e) => e.stopPropagation()}>
            {
                pictures.map((p, i) =>
                    <img className={`gallery-thumb-picture ${i === index && "selected"}`} src={backMediaAddress + p} alt={p} onClick={() => setIndex(i)}/>,
                )
            }
        </div>
    )
}

export default GalleryThumbnail