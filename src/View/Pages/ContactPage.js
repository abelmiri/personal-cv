import React, {PureComponent} from "react"
import MailSvg from "../../Media/SVG/MailSvg"
import PhoneSvg from "../../Media/SVG/PhoneSvg"
import TelegramSvg from "../../Media/SVG/TelegramSvg"
import InstagramSvg from "../../Media/SVG/InstagramSvg"
import LinkedinSvg from "../../Media/SVG/LinkedinSvg"
import PhoneRingSvg from "../../Media/SVG/PhoneRingSvg"

class ContactPage extends PureComponent
{
    constructor(props)
    {
        super(props)

        this.state = {}
    }

    componentDidMount()
    {
        window.scrollTo(0, 0)
    }

    render()
    {
        return (
            <React.Fragment>
                <div className="contact-header">
                    تماس با<span className="intro-text-name"> من </span>
                    <div className="contact-header-back-text">
                        در تماس باشید
                    </div>
                </div>
                <div className="contact-body">
                    <div className="contact-form">
                        <input className="contact-input" placeholder="عنوان پیام"/>
                        <input className="contact-input" placeholder="ایمیل شما"/>
                        <input className="contact-input" placeholder="نام شما"/>
                        <br/>
                        <textarea className="contact-textarea" placeholder="متن پیام شما"/>
                        <br/>
                        <div className="contact-send-button">
                            ارسال پیام
                            <TelegramSvg className="contact-send-button-svg"/>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-title">
                            خجالتی نباش!
                        </div>
                        <div className="contact-info-description">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.
                        </div>
                        <a href="mailto:info@janatifard.com" className="contact-info-mail-phone-container">
                            <MailSvg className="contact-info-mail-phone-svg"/>
                            <div className="contact-info-mail-phone-text">
                                <div className="title">رایانامه</div>
                                <div className="content">ارسال نامه‌ی الکترونیکی</div>
                            </div>
                        </a>
                        <a href="tel:+989153008626" className="contact-info-mail-phone-container">
                            <PhoneSvg className="contact-info-mail-phone-svg"/>
                            <div className="contact-info-mail-phone-text">
                                <div className="title">مکالمه</div>
                                <div className="content">برقراری تماس تلفنی</div>
                            </div>
                        </a>
                        <div className="contact-info-svg-container">
                            <a href="https://telegram.me/AhmadJanatiFard" className="contact-info-detail-svg-wrapper">
                                <TelegramSvg className="contact-info-detail-svg telegram"/>
                            </a>
                            <a href="https://www.instagram.com/AhmadJanatiFard" className="contact-info-detail-svg-wrapper">
                                <InstagramSvg className="contact-info-detail-svg"/>
                            </a>
                            <a href="https://www.linkedin.com/in/Ahmad-Janati-Fard" className="contact-info-detail-svg-wrapper">
                                <LinkedinSvg className="contact-info-detail-svg"/>
                            </a>
                            <a href="tel:+985138051164" className="contact-info-detail-svg-wrapper">
                                <PhoneRingSvg className="contact-info-detail-svg"/>
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactPage