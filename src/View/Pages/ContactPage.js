import React, {PureComponent} from "react"
import axios from "axios"
import MailSvg from "../../Media/SVG/MailSvg"
import PhoneSvg from "../../Media/SVG/PhoneSvg"
import TelegramSvg from "../../Media/SVG/TelegramSvg"
import InstagramSvg from "../../Media/SVG/InstagramSvg"
import LinkedinSvg from "../../Media/SVG/LinkedinSvg"
import PhoneRingSvg from "../../Media/SVG/PhoneRingSvg"
import CloseSvg from "../../Media/SVG/CloseSvg"

class ContactPage extends PureComponent
{
    constructor(props)
    {
        super(props)

        this.state = {
            loading: false,
            titleErr: false,
            emailErr: false,
            nameErr: false,
            messageErr: false,
            successModal: false,
        }
    }

    componentDidMount()
    {
        window.scrollTo(0, 10)
        document.addEventListener("keyup", (ev =>
        {
            if (ev.code === "Enter") this.sendEmail()
        }))
    }

    sendEmail = () =>
    {
        if (!this.state.loading)
        {
            let title = document.getElementById("title").value
            let email = document.getElementById("email").value
            let name = document.getElementById("name").value
            let message = document.getElementById("message").value
            if (title.length > 0 && email.length > 0 && name.length > 0 && message.length > 0)
            {
                const {titleErr, emailErr, nameErr, messageErr} = this.state
                if (!titleErr && !emailErr && !nameErr && !messageErr)
                {
                    let bodyFormData = new FormData()

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
                                this.setState({...this.state, loading: false, successModal: true})
                            })
                            .catch((error) =>
                            {
                                console.log(error)
                            })
                    })
                }
            }
            else this.setState({...this.state, titleErr: !(title.length > 0), emailErr: !(email.length > 0), nameErr: !(name.length > 0), messageErr: !(message.length > 0)})
        }
    }

    closeModal = (e) =>
    {
        e.preventDefault()
        e.stopPropagation()
        this.setState({...this.state, successModal: false}, () =>
        {
            document.getElementById("title").value = ""
            document.getElementById("email").value = ""
            document.getElementById("name").value = ""
            document.getElementById("message").value = ""
        })
    }

    render()
    {
        const {loading, successModal, titleErr, emailErr, nameErr, messageErr} = this.state
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
                        <input id="name" name="name" className={`contact-input ${nameErr && "input-error"}`} placeholder="نام شما" tabIndex="3" onBlur={(e =>
                        {
                            e.target.value.length > 1 ?
                                this.setState({...this.state, nameErr: false})
                                : this.setState({...this.state, nameErr: true})
                        })}/>
                        <input id="email" name="email" className={`contact-input ${emailErr && "input-error"}`} placeholder="ایمیل شما" tabIndex="2" onBlur={(e) =>
                        {
                            (e.target.value.indexOf("@") >= 0) && (e.target.value.length > 3) ?
                                this.setState({...this.state, emailErr: false})
                                : this.setState({...this.state, emailErr: true})
                        }}/>
                        <input id="title" name="title" className={`contact-input ${titleErr && "input-error"}`} placeholder="عنوان پیام" tabIndex="1" onBlur={(e) =>
                        {
                            e.target.value.length > 2 ?
                                this.setState({...this.state, titleErr: false})
                                : this.setState({...this.state, titleErr: true})
                        }}/>
                        <br/>
                        <textarea id="message" name="message" className={`contact-textarea ${messageErr && "input-error"}`} placeholder="متن پیام شما" tabIndex="4" onBlur={(e) =>
                        {
                            e.target.value.length > 4 ?
                                this.setState({...this.state, messageErr: false})
                                : this.setState({...this.state, messageErr: true})
                        }}/>
                        <br/>
                        <div className={loading ? "contact-send-button-inactive" : "contact-send-button"} onClick={this.sendEmail} tabIndex="5">
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
                {
                    successModal &&
                    <div className="success-modal-back" onClick={this.closeModal}>
                        <div className="success-modal-container">
                            <div className="success-modal-title">پیام شما با موفقیت ارسال شد!</div>
                            <div className="success-modal-description">ممنون از اینکه پیامت رو برام ارسال کردی دوست عزیز، من کمتر از یک روز آینده بهت پاسخ میدم.</div>
                            <CloseSvg className="success-modal-close-svg" onClick={this.closeModal}/>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}

export default ContactPage