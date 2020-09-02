import React, {PureComponent} from "react"
import axios from "axios"
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

        this.state = {
            loading: false,
        }
    }

    componentDidMount()
    {
        window.scrollTo(0, 10)
    }

    sendEmail = () =>
    {
        if (!this.state.loading)
        {
            let bodyFormData = new FormData()
            let title = document.getElementById("title").value
            let email = document.getElementById("email").value
            let name = document.getElementById("name").value
            let message = document.getElementById("message").value
            bodyFormData.append("title", title)
            bodyFormData.append("email", email)
            bodyFormData.append("name", name)
            bodyFormData.append("message", message)
            this.setState({...this.state, loading: true}, () =>
            {
                axios.post(
                    "https://script.google.com/macros/s/AKfycbwuycrF1yYVs-7kPYg3GqRSkRDjNqpIBhxQWaXxFGBJ59hzm5w/exec",
                    bodyFormData,
                    {headers: {"Content-Type": "multipart/form-data"}})
                    .then(() =>
                    {
                        this.setState({...this.state, loading: false})
                        alert("پیام شما با موفقیت ارسال شد")
                    })
                    .catch((error) =>
                    {
                        console.log(error)
                    })
            })
        }
    }

    render()
    {
        const {loading} = this.state
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
                        <input id="name" name="name" className="contact-input" placeholder="نام شما"/>
                        <input id="email" name="email" className="contact-input" placeholder="ایمیل شما"/>
                        <input id="title" name="title" className="contact-input" placeholder="عنوان پیام"/>
                        <br/>
                        <textarea id="message" name="message" className="contact-textarea" placeholder="متن پیام شما"/>
                        <br/>
                        <div className={loading ? "contact-send-button-inactive" : "contact-send-button"} onClick={this.sendEmail}>
                            ارسال پیام
                            <TelegramSvg className="contact-send-button-svg"/>
                        </div>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-title">
                            خجالتی نباش!
                        </div>
                        <div className="contact-info-description">
                            دوست عزیزم، صمیمانه ممنونم ازینکه وقت با ارزشت رو به دیدن محتوای سایت من اختصاص دادی، من آماده‌ام تا در کمتر از یک روز به صحبت های شما (مشاوره، انتقاد، پیشنهاد، سوال و یا
                            حتی گپ دوستانه) پاسخ بدم. ارادت همچنان باقیست...
                        </div>
                        <a href="mailto:ahmad@janatifard.ir" className="contact-info-mail-phone-container">
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