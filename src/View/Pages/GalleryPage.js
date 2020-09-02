import React, {PureComponent} from "react"
import GalleryItem from "../Components/GalleryItem"
import GalleryModal from "../Components/GalleryModal"
import ReactTooltip from "react-tooltip"
import galleryList from "../../object"

class GalleryPage extends PureComponent
{
    constructor(props)
    {
        super(props)

        this.state = {
            gallery: [],
        }
    }

    componentDidMount()
    {
        window.scrollTo(0, 10)
    }

    showGallery = (items) =>
    {
        this.setState({...this.state, gallery: items})
    }

    closeGallery = () =>
    {
        this.setState({...this.state, gallery: []})
    }

    render()
    {
        const {gallery} = this.state
        return (
            <React.Fragment>
                <div className="certificate-header">
                    گالری<span className="intro-text-name"> تصاویر </span>
                    <div className="certificate-header-back-text">
                        مستندات تصویری
                    </div>
                </div>
                <div className="gallery-wrapper">
                    <div className="gallery-item-container">
                        {
                            Object.values(galleryList).map(p =>
                                <GalleryItem image={p.gallery[0]} gallery={p.gallery} showGallery={(items) => this.showGallery(items)}
                                             title={p.title} description={p.description} key={p.title}/>)
                        }
                    </div>
                </div>
                {
                    gallery.length > 0 &&
                    <div className="galley-modal-container" onClick={this.closeGallery}>
                        <GalleryModal pictures={gallery} closeGallery={this.closeGallery}/>
                    </div>
                }
                <div className="galley-tooltip-container">
                    <ReactTooltip textColor="var(--primary-color)" backgroundColor="rgba(20,20,20,.9)"/>
                </div>
            </React.Fragment>
        )
    }
}

export default GalleryPage