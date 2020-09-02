import React, {PureComponent} from "react"
import ResearchSvg from "../../Media/SVG/ResearchSvg"
import ReactTooltip from "react-tooltip"

class ResearchPage extends PureComponent
{
    constructor(props)
    {
        super(props)

        this.state = {}
    }

    componentDidMount()
    {
        window.scrollTo(0, 10)
    }

    render()
    {
        return (
            <React.Fragment>
                <div className="certificate-header">
                    سوابق<span className="intro-text-name"> پژوهشی </span>
                    <div className="certificate-header-back-text">
                        مستندات پژوهشی
                    </div>
                </div>
                <div className="certificate-first-glance">
                    <div className="certificate-first-glance-description">
                        <div>مقالات و طرح های پژوهشی</div>
                        <div className="certificate-contents">
                            <div className="research-item-container" data-tip="لینک مقاله">
                                <div className="certificate-item-svg-container">
                                    <ResearchSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">1399</div>
                                </div>
                                <div className="certificate-item-title">
                                    طرح پژوهشی بررسی تاثیرگذاری شاخص های فنی و قانونی و زیرساختی توسعه دولت الکترونیک و پیاده سازی و اجرای آن در استان خراسان رضوی
                                    <div className="certificate-item-title-description"> دانشگاه آزاد اسلامی مشهد</div>
                                </div>
                                <div className="certificate-item-description">
                                    فعالیت در قالب همکار طرح.
                                </div>
                            </div>
                            <div className="research-item-container" data-tip="لینک مقاله">
                                <div className="certificate-item-svg-container">
                                    <ResearchSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">1396</div>
                                </div>
                                <div className="certificate-item-title">
                                    مکان یابی بهینه ماشین های مجازی در مراکز داده ابرهای محاسباتی بوسیله الگوریتم فرا ابتکاری خفاش
                                    <div className="certificate-item-title-description">پایگاه استنادی علوم جهان اسلام</div>
                                </div>
                                <div className="certificate-item-description">
                                    دومین کنفرانس بین المللی پژوهش های دانش بنیان در مهندسی کامپیوتر و فناوری اطلاعات.
                                </div>
                            </div>
                            <div className="research-item-container" data-tip="لینک مقاله">
                                <div className="certificate-item-svg-container">
                                    <ResearchSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">1395</div>
                                </div>
                                <div className="certificate-item-title">
                                    ترکیب سرویس های وب در محاسبات ابری بر اساس الگوریتم ژنتیک بهبودیافته
                                    <div className="certificate-item-title-description">پایگاه استنادی علوم جهان اسلام</div>
                                </div>
                                <div className="certificate-item-description">
                                    کنگره بین المللی نوآوری در مهندسی و توسعه تکنولوژی.
                                </div>
                            </div>
                            <div className="research-item-container" data-tip="لینک مقاله">
                                <div className="certificate-item-svg-container">
                                    <ResearchSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">1395</div>
                                </div>
                                <div className="certificate-item-title">
                                    ترکیب سرویس های وب در محاسبات ابری بر اساس الگوریتم ژنتیک بهبودیافته
                                    پایان نامه کارشناسی ارشد
                                    <div className="certificate-item-title-description"> پایان نامه کارشناسی ارشد </div>
                                </div>
                                <div className="certificate-item-description">این تکنیک نوع بهبودیافته الگوریتم ژنتیک به نام HPGA بوده که توانسته با تعداد عملگر ژنتیکی کمتر، البته سرعت محاسباتی بیشتر
                                    و درنتیجه در زمان عملیاتی کمتر، سرویس وب ترکیبی بهینه را معرفی نماید.
                                </div>
                                {/*<div className="certificate-item-description">*/}
                                {/*    محاسبات ابری، مدل رایانشی بر پایه ی اینترنت است که الگویی تازه برای عرضه، مصرف و تحویل سرویس های فناوری اطلاعات شامل: نرم افزار، اطلاعات و منابع اشتراکی رایانشی در*/}
                                {/*    بستر اینترنت را ارایه میکند. این خدمات در قالب وبسرویس به کاربران ارایه می شود. هر وب سرویس دارای مولفه های کیفیت سرویس می باشد که بر اساس آن انتخاب وعرضه می شود.*/}
                                {/*    این شاخص ها باید برای یک عمل ترکیب وب در نظر گرفته شوند. بااین حال تکنیک های موجود همه اینمشخصه ها را برای توصیف و ترکیب در نظر نمیگیرند. علاوه بر آن، عمل ترکیب وب*/}
                                {/*    سرویس ها بر اساس تنها یکی ازشاخص های فوق از دقت کافی و مناسب برخوردار نیست. از آنجایی که تعداد سرویس های وب کاندید برای ترکیب واستفاده که خدمات مشابه اما کیفیت*/}
                                {/*    سرویس متفاوت دارند در حال افزایش است، انتخاب یک ترکیب بهینه باکیفیتسرویس مطلوب که بتواند رضایت مشتری را نیز فراهم سازد یکی از چالش برانگیزترین مباحث موجود است. در*/}
                                {/*    اینتحقیق سعی بر آن بوده تا از یکی از تکنیک های یادگیری تکاملی که اخیرا موردتوجه بسیار محققین درزمینه ی ترکیبسرویس های وب بوده استفاده گردد. این تکنیک نوع بهبودیافته*/}
                                {/*    الگوریتم ژنتیک به نام HPGA بوده که توانسته با تعداد عملگر ژنتیکی کمتر، البته سرعت محاسباتی بیشتر و درنتیجه در زمان عملیاتی کمتر، سرویس وب ترکیبی بهینه را معرفی*/}
                                {/*    نماید. نتایج رویکرد پیشنهادی در این پژوهش با تکنیک های مشابه و بر اساس الگوریتم ژنتیک پایه مقایسه گردیده است. این ارزیابی ها نشان می دهد سرعت و عملکرد اجرای رویکرد*/}
                                {/*    پیشنهادی نسبت به مدلهای کلاسیک فوق به میزان 24 % بهبود یافته است؛ درحالیکه ترکیب سرویس وب مناسبتر ازنظر کیفیت سرویس را ارایه نموده است.*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
                <ReactTooltip textColor="var(--primary-color)" backgroundColor="rgba(20,20,20,.9)"/>
            </React.Fragment>
        )
    }
}

export default ResearchPage