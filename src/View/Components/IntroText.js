import React from "react"
import UserSvg from "../../Media/SVG/UserSvg"

const IntroText = (props) =>
{
    const {onSelect} = props
    return (
        <div className="intro-text-container">
            <div className="intro-content-wrapper">
                <p>سلام!</p>
                <span className="intro-text-bold">
                    من
                    <span className="intro-text-name"> احمد جنتی فرد </span>
                    هستم
                </span>
                <p className="intro-text-description">متخصص تکنولوژی اطلاعات، مدیر و طراح پروژه، مدرس حوضه تکنولوژی، مفتخرم جهت ارتقاء سطح علمی در زمینه ی طراحی و پیاده سازی وب سایت فعالیت کنم.</p>
                <div className="intro-more-about-button" onClick={() => onSelect("about")}>
                    بیشتر درباره من
                    <UserSvg className="intro-more-about-button-svg"/>
                </div>
            </div>
        </div>
    )
}

export default IntroText