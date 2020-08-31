import React, {PureComponent} from "react"
import n1 from "../../Media/Image/n1.png"
import n2 from "../../Media/Image/n2.png"
import n3 from "../../Media/Image/n3.png"
import n4 from "../../Media/Image/n4.png"
import n5 from "../../Media/Image/n5.png"
import n6 from "../../Media/Image/n6.png"
import GalleryItem from "../Components/GalleryItem"
import GalleryModal from "../Components/GalleryModal"
import ReactTooltip from "react-tooltip"

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
        window.scrollTo(0, 0)
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
                        <GalleryItem image={n1} gallery={[n1, n4, n5, n6]} showGallery={(items) => this.showGallery(items)}
                                     title="اجرای طرح احراز اصالت هویت برخط در دستگاه های اجرایی"
                                     description="مزایای اجرای این طرح: تکریم ارباب رجوع و افزایش رضایت شهروندان، کاهش چشمگیر استفاده از کاغذ و بایگانی فیزیکی"/>
                        <GalleryItem image={n2} gallery={[n2, n4, n5, n6]} showGallery={(items) => this.showGallery(items)}
                                     title="اجرای طرح احراز اصالت هویت برخط در دستگاه های اجرایی"
                                     description="مزایای اجرای این طرح: تکریم ارباب رجوع و افزایش رضایت شهروندان، کاهش چشمگیر استفاده از کاغذ و بایگانی فیزیکی"/>
                        <GalleryItem image={n3} gallery={[n3, n4, n5, n6]} showGallery={(items) => this.showGallery(items)}
                                     title="اجرای طرح احراز اصالت هویت برخط در دستگاه های اجرایی"
                                     description="مزایای اجرای این طرح: تکریم ارباب رجوع و افزایش رضایت شهروندان، کاهش چشمگیر استفاده از کاغذ و بایگانی فیزیکی"/>
                    </div>
                </div>
                {
                    gallery.length > 0 &&
                    <div className="galley-modal-container" onClick={this.closeGallery}>
                        <GalleryModal pictures={gallery}/>
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