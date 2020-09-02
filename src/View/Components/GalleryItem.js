import React from "react"

const backMediaAddress = "http://86.106.142.44:3010/media/"

const GalleryItem = (props) =>
{
    const {image, title, description, gallery, showGallery} = props
    return (
        <div className="gallery-item" onClick={() => showGallery(gallery)} data-tip="نمایش گالری">
            <div className="gallery-item-picture-container">
                <img className="gallery-item-picture" src={backMediaAddress + image} alt={title}/>
            </div>
            <div className="gallery-item-text-container">
                <div className="gallery-item-title">{title}</div>
                <div className="gallery-item-description">{description}</div>
            </div>
        </div>
    )
}

export default GalleryItem