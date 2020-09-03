import React, {PureComponent} from "react"
import EducationSvg from "../../Media/SVG/EducationSvg"
import CheckboxSvg from "../../Media/SVG/CheckboxSvg"

class EducationPage extends PureComponent
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
                    سوابق<span className="intro-text-name"> آموزشی </span>
                    <div className="certificate-header-back-text">
                        مستندات آموزشی
                    </div>
                </div>
                <div className="certificate-first-glance">
                    <div className="certificate-first-glance-description">
                        <div>دانشگاه‌ها و موسسات آموزش عالی</div>
                        <div className="certificate-contents">

                            <div className="research-item-container">
                                <div className="certificate-item-svg-container">
                                    <EducationSvg className="certificate-item-svg"/>
                                </div>
                                <span className="certificate-item-date">مهر 1395 تا کنون</span>
                                <br/>
                                <div className="certificate-item-title">
                                    دانشگاه صنعتی سجاد مشهد
                                    {/*<span className="certificate-item-title-description"> - دانشگاه صنعتی سجاد مشهد</span>*/}
                                </div>
                                <div className="certificate-item-description">
                                    <CheckboxSvg className="education-description-svg"/>
                                    مهندسی اینترنت
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    طراحی صفحات وب
                                </div>
                            </div>

                            <div className="research-item-container">
                                <div className="certificate-item-svg-container">
                                    <EducationSvg className="certificate-item-svg"/>
                                </div>
                                <span className="certificate-item-date">مهر 1394 تا کنون</span>
                                <br/>
                                <div className="certificate-item-title">
                                    دانشگاه فنی و حرفه ای استان
                                    {/*<span className="certificate-item-title-description"> - دانشگاه فنی و حرفه ای استان</span>*/}
                                </div>
                                <div className="certificate-item-description">
                                    <CheckboxSvg className="education-description-svg"/>
                                    برنامه سازی پیشرفته 1 و 2
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    بانک های اطلاعاتی
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    مبانی و مهندسی اینترنت
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    طراحی و برنامه نویسی مبتنی بر وب
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    پروژه پایان دوره کاردانی و کارشناسی
                                    <br/>
                                </div>
                            </div>

                            <div className="research-item-container">
                                <div className="certificate-item-svg-container">
                                    <EducationSvg className="certificate-item-svg"/>
                                </div>
                                <span className="certificate-item-date">تیر 1395 تا 1398</span>
                                <br/>
                                <div className="certificate-item-title">
                                    مرکز آموزش ضمن خدمت کارکنان دولت
                                    {/*<span className="certificate-item-title-description"> - ضمن خدمت کارکنان دولت</span>*/}
                                </div>
                                <div className="certificate-item-description">
                                    <CheckboxSvg className="education-description-svg"/>
                                    کارشناسان فناوری اطلاعات استانداری و فرمانداری های استان خراسان رضوی
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    کارشناسان سازمان فاوا شهرداری مشهد
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    کارشناسان پلیس فتا نیروی انتظامی استان
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    کارشناسان شرکت پشتیبان توزیع نیروی برق استان
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    کارشناسان انفورماتیک دانشگاه علوم پزشکی مشهد
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    توانمندسازی مربیان سازمان فنی و حرفه ای استان خراسان بزرگ (شمالی-رضوی-جنوبی)
                                    <br/>
                                </div>
                            </div>

                            <div className="research-item-container">
                                <div className="certificate-item-svg-container">
                                    <EducationSvg className="certificate-item-svg"/>
                                </div>
                                <span className="certificate-item-date">فروردین 1394 تا 1397</span>
                                <br/>
                                <div className="certificate-item-title">
                                    مراکز آموزش عالی و آموزشگاه های آزاد
                                    {/*<span className="certificate-item-title-description"> - مراکز آموزش عالی و آموزشگاه های آزاد</span>*/}
                                </div>
                                <div className="certificate-item-description">
                                    <CheckboxSvg className="education-description-svg"/>
                                    آزمایشگاه فناوری اطلاعات لایتک دانشگاه صنعتی شریف
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    مرکز آموزش های آزاد دانشگاه فردوسی مشهد
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    مرکز آموزش های آزاد دانشگاه پیام نور مشهد
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    مرکز آموزش های آزاد دانشگاه امام حسین(ع) مشهد
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    مجتمع آموزش عالی دی سیستم مشهد
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    مجمتمع آموزشی مدرسان شریف
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    مجتمع آموزشی انفورماتیک بین الملل
                                    <br/>
                                </div>
                            </div>

                            <div className="research-item-container">
                                <div className="certificate-item-svg-container">
                                    <EducationSvg className="certificate-item-svg"/>
                                </div>
                                <span className="certificate-item-date">تیر 1388 تا 1395</span>
                                <br/>
                                <div className="certificate-item-title">
                                    اداره کل آموزش فنی و حرفه ای استان
                                    {/*<span className="certificate-item-title-description"> - اداره کل آموزش فنی و حرفه ای استان</span>*/}
                                </div>
                                <div className="certificate-item-description">
                                    <CheckboxSvg className="education-description-svg"/>
                                    مهندس در توسعه وب های Enterprise ASP.NET
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    برنامه نویس Entity Framework
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    برنامه نویس ASP.NET
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    برنامه نویس MVC
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    برنامه نویس AJAX
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    برنامه نویس C#.NET
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    مدرس Web Design Fundamental
                                    <br/>
                                </div>
                            </div>


                            <div className="research-item-container">
                                <div className="certificate-item-svg-container">
                                    <EducationSvg className="certificate-item-svg"/>
                                </div>
                                <span className="certificate-item-date">مهر 1395 تا کنون</span>
                                <br/>
                                <div className="certificate-item-title">
                                    سخنرانی علمی و آموزشی (کارگاه، سمینار، همایش)
                                    {/*<span className="certificate-item-title-description"> - دانشگاه فنی و حرفه ای استان</span>*/}
                                </div>
                                <div className="certificate-item-description">
                                    <CheckboxSvg className="education-description-svg"/>
                                    جایگاه وب در عرصه آموزش
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    بهینه سازی موتورهای جستجو
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    نفوذ و صدنفوذ (تست آسیب پذیری)
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    آینده وب، چالش ها و فرصت ها
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    آشنایی با تکنولوژی های مایکروسافت
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    کدنویسی حرفه ای و سریع
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    روش های نوین کسب درآمد اینترنتی
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    وب مدرن (تکنیک ها و ترفندها)
                                    <br/>
                                    <CheckboxSvg className="education-description-svg"/>
                                    نظام اداری دولت الکترونیک
                                    <br/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default EducationPage