import React, {PureComponent} from "react"

class AboutPage extends PureComponent
{
    constructor(props)
    {
        super(props)

        this.state = {}

    }

    render()
    {
        const {onSelect} = this.props
        return (
            <React.Fragment>
                <div className="about-header">
                    درباره<span className="intro-text-name"> من </span>
                    <div className="about-header-back-text">
                        خلاصه رزومه
                    </div>
                </div>
                <div className="about-first-glance">
                    <div className="about-first-glance-stats">
                        <div className="about-first-glance-box">
                            +20
                            <div className="about-first-glance-box-title">
                                سال سابقه
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +150
                            <div className="about-first-glance-box-title">
                                پروژه پایان یافته
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +65
                            <div className="about-first-glance-box-title">
                                مدرک معتبر
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +30
                            <div className="about-first-glance-box-title">
                                مقاله
                            </div>
                        </div>
                    </div>
                    <div className="about-first-glance-description">
                        <div>اطلاعات شخصی</div>
                        <div className="about-first-glance-description-content">
                            <div className="about-first-glance-description-content-right">
                                <div className="about-first-glance-description-title">نام :&nbsp;</div>
                                <div className="about-first-glance-description-value">احمد</div>
                                <br/>
                                <div className="about-first-glance-description-title">نام خانوادگی :&nbsp;</div>
                                <div className="about-first-glance-description-value">جنتی فرد</div>
                                <br/>
                                <div className="about-first-glance-description-title">سن :&nbsp;</div>
                                <div className="about-first-glance-description-value">30</div>
                                <br/>
                                <div className="about-first-glance-description-title">ملیت :&nbsp;</div>
                                <div className="about-first-glance-description-value">ایرانی</div>
                                <br/>
                            </div>
                            <div className="about-first-glance-description-content-left">
                                <div className="about-first-glance-description-title">آدرس :&nbsp;</div>
                                <div className="about-first-glance-description-value">مشهد</div>
                                <br/>
                                <div className="about-first-glance-description-title">شماره :&nbsp;</div>
                                <div className="about-first-glance-description-value">09153008626</div>
                                <br/>
                                <div className="about-first-glance-description-title">ایمیل :&nbsp;</div>
                                <div className="about-first-glance-description-value">info@janatifard.com</div>
                                <br/>
                                <div className="about-first-glance-description-title">زبان :&nbsp;</div>
                                <div className="about-first-glance-description-value">فارسی، انگلیسی</div>
                                <br/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutPage