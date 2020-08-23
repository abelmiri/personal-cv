import React, {PureComponent} from "react"
import HomeSvg from "../../Media/SVG/HomeSvg"
import UserSvg from "../../Media/SVG/UserSvg"
import CertificateSvg from "../../Media/SVG/CertificateSvg"
import ResearchSvg from "../../Media/SVG/ResearchSvg"
import EducationSvg from "../../Media/SVG/EducationSvg"

class MainSideBar extends PureComponent
{
    render()
    {
        const {selected, onSelect} = this.props
        return (
            <div className="main-sidebar-container">
                <div className={`main-sidebar-option intro ${selected === "intro" && "selected"}`} onClick={() => onSelect("intro")}>
                    <HomeSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        معرفی
                    </div>
                </div>
                <div className={`main-sidebar-option about ${selected === "about" && "selected"}`} onClick={() => onSelect("about")}>
                    <UserSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        درباره من
                    </div>
                </div>
                <div className={`main-sidebar-option certificate ${selected === "certificate" && "selected"}`} onClick={() => onSelect("certificate")}>
                    <CertificateSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        مدارک علمی
                    </div>
                </div>
                <div className={`main-sidebar-option research ${selected === "research" && "selected"}`} onClick={() => onSelect("research")}>
                    <ResearchSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        سوابق پژوهشی
                    </div>
                </div>
                <div className={`main-sidebar-option education ${selected === "education" && "selected"}`} onClick={() => onSelect("education")}>
                    <EducationSvg className="main-sidebar-svg"/>
                    <div className="main-sidebar-text">
                        سوابق آموزشی
                    </div>
                </div>
            </div>
        )
    }
}

export default MainSideBar