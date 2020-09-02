import React from "react"
import UserSvg from "../../Media/SVG/UserSvg"
import CvSvg from "../../Media/SVG/CvSvg"
import TelegramSvg from "../../Media/SVG/TelegramSvg"
import InstagramSvg from "../../Media/SVG/InstagramSvg"
import LinkedinSvg from "../../Media/SVG/LinkedinSvg"
import PhoneRingSvg from "../../Media/SVG/PhoneRingSvg"
import CertificateSvg from "../../Media/SVG/CertificateSvg"
import EducationSvg from "../../Media/SVG/EducationSvg"
import ResearchSvg from "../../Media/SVG/ResearchSvg"
import WorkSvg from "../../Media/SVG/WorkSvg"
import ContactSvg from "../../Media/SVG/ContactSvg"
import GallerySvg from "../../Media/SVG/GallerySvg"
import MedalSvg from "../../Media/SVG/MedalSvg"
import AppreciationSvg from "../../Media/SVG/AppreciationSvg"
import SkillSvg from "../../Media/SVG/SkillSvg"
import CertificateShortSvg from "../../Media/SVG/CertificateShortSvg"
import ProjectSvg from "../../Media/SVG/ProjectSvg"

const IntroText = (props) =>
{
    const {onSelect, OnHover} = props
    return (
        <div className="intro-text-container">
            <div className="intro-content-wrapper">
                <p>سلام!</p>
                <span className="intro-text-bold">
                    من
                    <span className="intro-text-name"> احمد جنتی فرد </span>
                    هستم
                </span>
                <p className="intro-text-description">کارشناس ارشد کامپیوتر، کارشناس فناوری اطلاعات استانداری، مشاور و مدیر پروژه های تجاری و نرم افزاری، مدرس دروس تخصصی، برنامه نویسی و وب</p>
                {/*<div className="intro-top-buttons-container">*/}
                {/*    <div className="intro-more-about-button" onClick={() => onSelect("about")} onMouseOver={() => OnHover("about")} onMouseLeave={() => OnHover("")}>*/}
                {/*        بیشتر درباره من*/}
                {/*        <UserSvg className="intro-more-about-button-svg"/>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="intro-info-svg-container">
                    <a href="https://telegram.me/AhmadJanatiFard" className="intro-info-detail-svg-wrapper">
                        <TelegramSvg className="intro-info-detail-svg telegram"/>
                    </a>
                    <a href="https://www.instagram.com/AhmadJanatiFard" className="intro-info-detail-svg-wrapper">
                        <InstagramSvg className="intro-info-detail-svg"/>
                    </a>
                    <div className="about-download-cv-button">
                        دریافت فایل رزومه
                        <CvSvg className="about-download-cv-button-svg"/>
                    </div>
                    <a href="https://www.linkedin.com/in/Ahmad-Janati-Fard" className="intro-info-detail-svg-wrapper">
                        <LinkedinSvg className="intro-info-detail-svg"/>
                    </a>
                    <a href="tel:+985138051164" className="intro-info-detail-svg-wrapper">
                        <PhoneRingSvg className="intro-info-detail-svg"/>
                    </a>
                </div>
                <div className="intro-bottom-buttons-container">
                    <div className="intro-side-bar-button" onClick={() => onSelect("about")} onMouseOver={() => OnHover("about")} onMouseLeave={() => OnHover("")}>
                        درباره من
                        <UserSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("about")} onMouseOver={() => OnHover("about")} onMouseLeave={() => OnHover("")}>
                        مهارت‌ها
                        <SkillSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("about")} onMouseOver={() => OnHover("about")} onMouseLeave={() => OnHover("")}>
                        افتخارات
                        <MedalSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("about")} onMouseOver={() => OnHover("about")} onMouseLeave={() => OnHover("")}>
                        تقدیرنامه‌ها
                        <AppreciationSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("certificate")} onMouseOver={() => OnHover("certificate")} onMouseLeave={() => OnHover("")}>
                        مدارک علمی
                        <CertificateSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("certificate")} onMouseOver={() => OnHover("certificate")} onMouseLeave={() => OnHover("")}>
                        گواهینامه‌ها
                        <CertificateShortSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("research")} onMouseOver={() => OnHover("research")} onMouseLeave={() => OnHover("")}>
                        سوابق پژوهشی
                        <ResearchSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("education")} onMouseOver={() => OnHover("education")} onMouseLeave={() => OnHover("")}>
                        سوابق آموزشی
                        <EducationSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("work")} onMouseOver={() => OnHover("work")} onMouseLeave={() => OnHover("")}>
                        سوابق اجرایی
                        <WorkSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("work")} onMouseOver={() => OnHover("work")} onMouseLeave={() => OnHover("")}>
                        پروژه‌ها
                        <ProjectSvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("gallery")} onMouseOver={() => OnHover("gallery")} onMouseLeave={() => OnHover("")}>
                        گالری تصاویر
                        <GallerySvg className="intro-side-bar-button-svg"/>
                    </div>
                    <div className="intro-side-bar-button" onClick={() => onSelect("contact")} onMouseOver={() => OnHover("contact")} onMouseLeave={() => OnHover("")}>
                        تماس با من
                        <ContactSvg className="intro-side-bar-button-svg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroText