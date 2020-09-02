import React, {PureComponent} from "react"
import MedalSvg from "../../Media/SVG/MedalSvg"
import AppreciationSvg from "../../Media/SVG/AppreciationSvg"

class AboutPage extends PureComponent
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
                <div className="about-header">
                    درباره<span className="intro-text-name"> من </span>
                    <div className="about-header-back-text">
                        خلاصه رزومه
                    </div>
                </div>
                <div className="about-first-glance">
                    <div className="about-first-glance-stats">
                        <div className="about-first-glance-box">
                            +5
                            <div className="about-first-glance-box-title">
                                عنوان مقاله و طرح پژوهشی
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +10
                            <div className="about-first-glance-box-title">
                                سال آموزش
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +12
                            <div className="about-first-glance-box-title">
                                سال تجربه کاری
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +15
                            <div className="about-first-glance-box-title">
                                عنوان پایان نامه دانشجویی
                            </div>
                        </div>
                    </div>
                    <div className="about-first-glance-stats">
                        <div className="about-first-glance-box">
                            +20
                            <div className="about-first-glance-box-title">
                                گواهینامه معتبر
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +30
                            <div className="about-first-glance-box-title">
                                عنوان کارگاه، سمینار و سخنرانی علمی
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +50
                            <div className="about-first-glance-box-title">
                                مشاوره پروژه های تجاری
                            </div>
                        </div>
                        <div className="about-first-glance-box">
                            +100
                            <div className="about-first-glance-box-title">
                                تقدیرنامه و لوح سپاس
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-separator-container">
                    <div className="about-separator"/>
                </div>
                <div className="about-skills-container">
                    <div>مهارت ها</div>
                    <div className="about-skills">
                        <div className="about-skill-item">
                            <div className="about-skill-item-bar _100"/>
                            <div className="about-skill-item-title">مدیریت پروژه - Scrum, CMMI, Agile, Team Foundation Server, GIT</div>
                        </div>
                        <div className="about-skill-item">
                            <div className="about-skill-item-bar _100"/>
                            <div className="about-skill-item-title">برنامه نویسی وب - ASP.NET MVC, ASP CORE, Entity Framework</div>
                        </div>
                        <div className="about-skill-item">
                            <div className="about-skill-item-bar _100"/>
                            <div className="about-skill-item-title">طراحی وب - HTML5, CSS3, JS, JQuery, Angular, Node, React, TypeScript</div>
                        </div>
                        <div className="about-skill-item">
                            <div className="about-skill-item-bar _80"/>
                            <div className="about-skill-item-title">برنامه نویسی ویندوز- C, C++, C#.NET/VB.NET, Object Oriented, Socket, Shell</div>
                        </div>
                        <div className="about-skill-item">
                            <div className="about-skill-item-bar _80"/>
                            <div className="about-skill-item-title">بانک های اطلاعاتی - MS SQL, MS Access, MySQL</div>
                        </div>
                        <div className="about-skill-item">
                            <div className="about-skill-item-bar _60"/>
                            <div className="about-skill-item-title">سیستم های عامل - MS Windows, LINUX</div>
                        </div>
                    </div>
                    <div className="about-skill-title">زبان انگلیسی</div>
                    <div className="about-skills">
                        <div className="about-skill-item-eng">
                            <div className="about-skill-item-bar _80"/>
                            <div className="about-skill-item-title">مهارت خواندن، نوشتن، شنیدار، گفتار</div>
                        </div>
                        {/*<div className="about-skill-item">*/}
                        {/*    <div className="about-skill-item-bar _80"/>*/}
                        {/*    <div className="about-skill-item-title">مهارت نوشتن</div>*/}
                        {/*</div>*/}
                        {/*<div className="about-skill-item">*/}
                        {/*    <div className="about-skill-item-bar _80"/>*/}
                        {/*    <div className="about-skill-item-title">مهارت شنیداری</div>*/}
                        {/*</div>*/}
                        {/*<div className="about-skill-item">*/}
                        {/*    <div className="about-skill-item-bar _80"/>*/}
                        {/*    <div className="about-skill-item-title">مهارت گفتاری</div>*/}
                        {/*</div>*/}
                    </div>
                </div>
                <div className="about-separator-container">
                    <div className="about-separator"/>
                </div>
                <div className="about-skills-container">
                    <div>افتخارات</div>
                    <div className="certificate-contents">
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <MedalSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-gpa-date-container">
                                <div className="certificate-item-date">1392</div>
                            </div>
                            <div className="certificate-item-title">
                                انتخاب به عنوان سرباز نمونه کشوری در حوزه فناوری اطلاعات، نظم و انضباط اجتماعی
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <MedalSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-gpa-date-container">
                                <div className="certificate-item-date">1396</div>
                            </div>
                            <div className="certificate-item-title">
                                کارشناس داور المپیاد ملی مهارت در رشته فناوری اطلاعات و طراحی وب در مرحله استانی و شهرستانی
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <MedalSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-gpa-date-container">
                                <div className="certificate-item-date">1398</div>
                            </div>
                            <div className="certificate-item-title">
                                داور جشنواره دانشجویی دانشگاه فنی و حرفه ای کشور در زمینه تولیدات نرم افزاری و شبکه های مجازی
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <MedalSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-gpa-date-container">
                                <div className="certificate-item-date">1398</div>
                            </div>
                            <div className="certificate-item-title">
                                عضو کمیته فناوری اطلاعات ستاد برگزاری انتخابات استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <MedalSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-gpa-date-container">
                                <div className="certificate-item-date">1396</div>
                            </div>
                            <div className="certificate-item-title">
                                آزمونگر تعیین سطح مربیگری دوره های پیشرفته کامپیوتر
                            </div>
                        </div>
                        {/*<div className="research-item-container">*/}
                        {/*    <div className="certificate-item-svg-container">*/}
                        {/*        <MedalSvg className="certificate-item-svg"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="certificate-gpa-date-container">*/}
                        {/*        <div className="certificate-item-date">1398</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="certificate-item-title">*/}
                        {/*        دریافت بیش از 10 لوح تقدیر از مقامات دولتی، مدیران کل دستگاه های اجرایی و رئوسای دانشگاه*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="research-item-container">*/}
                        {/*    <div className="certificate-item-svg-container">*/}
                        {/*        <MedalSvg className="certificate-item-svg"/>*/}
                        {/*    </div>*/}
                        {/*    <div className="certificate-gpa-date-container">*/}
                        {/*        <div className="certificate-item-date">1398</div>*/}
                        {/*    </div>*/}
                        {/*    <div className="certificate-item-title">*/}
                        {/*        برگزاری بیش از 10 رویداد علمی و آموزشی (همایش، سمینار، کنفرانس و...)*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <MedalSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-gpa-date-container">
                                <div className="certificate-item-date">1395</div>
                            </div>
                            <div className="certificate-item-title">
                                کسب رتبه 80 کاردانی پیوسته و رتبه 30 کارشناسی ناپیوسته و 400 کارشناسی ارشد آزمون سراسری
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-separator-container">
                    <div className="about-separator"/>
                </div>
                <div className="about-skills-container">
                    <div>تقدیرنامه‌ها</div>
                    <div className="certificate-contents">
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                استاندار محترم خراسان رضوی
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                رئیس مرکز توسعه دولت الکترونیک و فناوری اطلاعات وزارت کشور
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                معاون نیروی انسانی نیروی انتظامی کشور
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                معاون هماهنگی امور اقتصادی استانداری خراسان رضوی
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                معاون توسعه مدیریت و منابع استانداری خراسان رضوی
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                مدیر فناوری اطلاعات و شبکه دولت استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                رئیس نظام صنفی رایانه ای استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                رئیس پلیس فتا نیروی انتظامی استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                رئیس دانشگاه فنی و حرفه ای استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                رئیس دانشگاه آزاد اسلامی واحد مشهد
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                مدیرکل دفتر جذب و حمایت از سرمایه گذاری استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                مدیرکل دفتر برنامه ریزی نوسازی و تحول اداری استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                مدیرکل ورزش و جوانان استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                رئیس کانون سردفتران و دفتریاران استان
                            </div>
                        </div>
                        <div className="research-item-container">
                            <div className="certificate-item-svg-container">
                                <AppreciationSvg className="certificate-item-svg"/>
                            </div>
                            <div className="certificate-item-title">
                                مدیران عامل شرکت های بخش خصوصی فناوری اطلاعات استان
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about-separator-container">
                    <div className="about-separator"/>
                </div>
            </React.Fragment>
        )
    }
}

export default AboutPage