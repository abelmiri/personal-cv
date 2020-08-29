import React, {PureComponent} from "react"
import HomeSvg from "../../Media/SVG/HomeSvg"
import UserSvg from "../../Media/SVG/UserSvg"
import CertificateSvg from "../../Media/SVG/CertificateSvg"
import ResearchSvg from "../../Media/SVG/ResearchSvg"
import EducationSvg from "../../Media/SVG/EducationSvg"
import WorkSvg from "../../Media/SVG/WorkSvg"
import ContactSvg from "../../Media/SVG/ContactSvg"
import GallerySvg from "../../Media/SVG/GallerySvg"

class MainSideBar extends PureComponent
{
    render()
    {
        const {selected, hovered, onSelect} = this.props
        return (
            <div className="main-sidebar-container">
                <div className={`main-sidebar-option intro ${selected === "intro" && "selected"} ${hovered === "intro" && "hovered"}`}
                     onClick={() => onSelect("intro")}>
                    <HomeSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        معرفی
                    </div>
                </div>
                <div className={`main-sidebar-option about ${selected === "about" && "selected"} ${hovered === "about" && "hovered"}`}
                     onClick={() => onSelect("about")}>
                    <UserSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        درباره من
                    </div>
                </div>
                <div className={`main-sidebar-option certificate ${selected === "certificate" && "selected"} ${hovered === "certificate" && "hovered"}`}
                     onClick={() => onSelect("certificate")}>
                    <CertificateSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        مدارک علمی
                    </div>
                </div>
                <div className={`main-sidebar-option research ${selected === "research" && "selected"} ${hovered === "research" && "hovered"}`}
                     onClick={() => onSelect("research")}>
                    <ResearchSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        سوابق پژوهشی
                    </div>
                </div>
                <div className={`main-sidebar-option education ${selected === "education" && "selected"} ${hovered === "education" && "hovered"}`}
                     onClick={() => onSelect("education")}>
                    <EducationSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        سوابق آموزشی
                    </div>
                </div>
                <div className={`main-sidebar-option work ${selected === "work" && "selected"} ${hovered === "work" && "hovered"}`}
                     onClick={() => onSelect("work")}>
                    <WorkSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        سوابق اجرایی
                    </div>
                </div>
                <div className={`main-sidebar-option gallery ${selected === "gallery" && "selected"} ${hovered === "gallery" && "hovered"}`}
                     onClick={() => onSelect("gallery")}>
                    <GallerySvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        گالری تصاویر
                    </div>
                </div>
                <div className={`main-sidebar-option contact ${selected === "contact" && "selected"} ${hovered === "contact" && "hovered"}`}
                     onClick={() => onSelect("contact")}>
                    <ContactSvg className="main-sidebar-svg bigger"/>
                    <div className="main-sidebar-text">
                        تماس با من
                    </div>
                </div>
            </div>
        )
    }
}

export default MainSideBar