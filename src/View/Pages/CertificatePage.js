import React, {PureComponent} from "react"
import CertificateSvg from "../../Media/SVG/CertificateSvg"
import ReactTooltip from "react-tooltip"
import CertificateShortSvg from "../../Media/SVG/CertificateShortSvg"

class CertificatePage extends PureComponent
{
    componentDidMount()
    {
        window.scrollTo(0, 10)
    }

    render()
    {
        return (
            <React.Fragment>
                <div className="certificate-header">
                    مدارک<span className="intro-text-name"> علمی </span>
                    <div className="certificate-header-back-text">
                        مستندات تحصیلی
                    </div>
                </div>
                <div className="certificate-first-glance">
                    <div className="certificate-first-glance-description">
                        <div>سوابق تحصیلی</div>
                        <div className="certificate-contents">
                            <div className="certificate-item-container active" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1393 تا 1395</div>
                                    <div className="certificate-item-date">معدل 18.02</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندسی کامپیوتر - هوش مصنوعی
                                </div>
                                <div className="certificate-item-title-description"> کارشناسی ارشد</div>
                                <div className="certificate-item-description">دانشگاه خیام مشهد</div>
                            </div>
                            <div className="certificate-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1389 تا 1391</div>
                                    <div className="certificate-item-date">معدل 17.44</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندسی کامپیوتر - نرم افزار
                                </div>
                                <div className="certificate-item-title-description"> کارشناسی</div>
                                <div className="certificate-item-description">دانشگاه صنعتی سجاد مشهد</div>
                            </div>
                            <div className="certificate-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1386 تا 1388</div>
                                    <div className="certificate-item-date">معدل 18.12</div>
                                </div>
                                <div className="certificate-item-title">
                                    تکنولوژی نرم افزار
                                </div>
                                <div className="certificate-item-title-description"> کاردانی</div>
                                <div className="certificate-item-description">هنرستان فنی حرفه‌ای استان</div>
                            </div>
                        </div>
                    </div>
                    <div className="certificate-first-glance-description">
                        <div>گواهینامه‌ها</div>
                        <div className="certificate-contents">
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1398</div>
                                </div>
                                <div className="certificate-item-title">
                                    برنامه نویس MVC
                                </div>
                                <div className="certificate-item-description">سازمان آموزش فنی و حرفه ای</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1398</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندس برنامه نویس C# .NET Web Application
                                </div>
                                <div className="certificate-item-description">سازمان آموزش فنی و حرفه ای</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1398</div>
                                </div>
                                <div className="certificate-item-title">
                                    ICDL
                                </div>
                                <div className="certificate-item-description">بنیاد جهانی ICDL در ایران</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1397</div>
                                </div>
                                <div className="certificate-item-title">
                                    تهدیدات سایبری و راهکارهای دفاعی
                                </div>
                                <div className="certificate-item-description">استانداری خراسان رضوی</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1397</div>
                                </div>
                                <div className="certificate-item-title">
                                    مدیریت فناوری اطلاعات
                                </div>
                                <div className="certificate-item-description">استانداری خراسان رضوی</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1395</div>
                                </div>
                                <div className="certificate-item-title">
                                    برنامه نویس AJAX
                                </div>
                                <div className="certificate-item-description">سازمان آموزش فنی و حرفه ای</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1389</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندس طراح و توسعه دهنده عمومی وب
                                </div>
                                <div className="certificate-item-description">سازمان آموزش فنی و حرفه ای</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1388</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندس در توسعه وب های Enterprise با ASP.NET
                                </div>
                                <div className="certificate-item-description">سازمان آموزش فنی و حرفه ای</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1388</div>
                                </div>
                                <div className="certificate-item-title">
                                    برنامه نویس SQL Server
                                </div>
                                <div className="certificate-item-description">سازمان آموزش فنی و حرفه ای</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1388</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندس برنامه نویس VB.NET (Web Application)
                                </div>
                                <div className="certificate-item-description">سازمان آموزش فنی و حرفه ای</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1398</div>
                                </div>
                                <div className="certificate-item-title">
                                    همایش ملی فناوری اطلاعات و هوشمند سازی
                                </div>
                                <div className="certificate-item-description">استانداری خراسان رضوی</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1395</div>
                                </div>
                                <div className="certificate-item-title">
                                    کنگره بین المللی نوآوری در مهندسی و توسعه تکنولوژی
                                </div>
                                <div className="certificate-item-description">دانشگاه تبریز</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1389</div>
                                </div>
                                <div className="certificate-item-title">
                                    Junior Proficiency - MELAB
                                </div>
                                <div className="certificate-item-description">جهاد دانشگاهی مشهد</div>
                            </div>
                            <div className="honor-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateShortSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1389</div>
                                </div>
                                <div className="certificate-item-title">
                                    Advance English Course as a Foreign Language
                                </div>
                                <div className="certificate-item-description">جهاد دانشگاهی مشهد</div>
                            </div>
                        </div>
                    </div>
                </div>
                <ReactTooltip textColor="var(--primary-color)" backgroundColor="rgba(20,20,20,.9)"/>
            </React.Fragment>
        )
    }
}

export default CertificatePage