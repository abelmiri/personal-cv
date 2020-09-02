import React, {PureComponent} from "react"

class WorkPage extends PureComponent
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
                    سوابق<span className="intro-text-name"> اجرایی </span>
                    <div className="certificate-header-back-text">
                        مستندات شغلی
                    </div>
                </div>
                <div className="certificate-first-glance">
                    <div className="certificate-first-glance-description">
                        <div>سوابق شغلی</div>
                        <div className="certificate-contents">
                            <div className="work-item-container">

                                <div className="work-item">
                                    <div className="work-item-date">
                                        سال 1396 تا کنون
                                    </div>
                                    <div className="work-item-title">
                                        کارشناس فناوری اطلاعات
                                        <span className="work-item-organization"> - استانداری خراسان رضوی </span>
                                    </div>
                                    <div className="work-item-description">
                                        <div>کارشناس مسئول توسعه سرویس های دولتی</div>
                                        <div>کارشناس مسئول حوزه هوشمند سازی و کسب و کار</div>
                                    </div>
                                </div>

                                <div className="work-item">
                                    <div className="work-item-date">
                                        سال 1395 تا کنون
                                    </div>
                                    <div className="work-item-title">
                                        مشاور و مدیر پروژه
                                        <span className="work-item-organization"> - شرکت خصوصی </span>
                                    </div>
                                    <div className="work-item-description">
                                        <div>سامانه هوشمند سازی پرداخت و شبکه تعاملی یکپارچه دانشگاه های استان</div>
                                        <div>سامانه خرید و فروش اعتباری محصولات و شبکه پذیرندگان</div>
                                        <div>سامانه آموزش مجازی پژوهشکده نوین شهر معنوی ثامن</div>
                                        <div>سامانه تنظیم بازار گیاهان دارویی شرکت سپاد استان</div>
                                        <div>سامانه برگزاری الکترونیک همایش ها و کنفرانس ها</div>
                                        <div>سامانه تقسیم اسناد رسمی کانون سردفتران استان</div>
                                        <div>سامانه جامع فرصت های سرمایه گذاری استان</div>
                                        <div>سامانه تهیه و تولید محتوای آموزشی دیجیتال</div>
                                        <div>سامانه مدیریت جلسات و رویدادهای استان</div>
                                        <div>داشبورد جامع مدیریت شبکه دولت استان</div>
                                    </div>
                                </div>

                                <div className="work-item">
                                    <div className="work-item-date">
                                        سال 1395 تا کنون
                                    </div>
                                    <div className="work-item-title">
                                        راهنمایی و مشاوره پایان نامه
                                        <span className="work-item-organization"> - شرکت خصوصی </span>
                                    </div>
                                    <div className="work-item-description">
                                        <div> سامانه جامع فرصت های سرمایه گذاری استان فروشگاه اینترنتی محصولات دیجیتال</div>
                                        <div> فروشگاه اینترنتی میوه و سبزیجات فروشگاه اینترنتی محصولات دیجیتال</div>
                                        <div>سامانه جامع مشاغل و فارغ التحصیلان</div>
                                        <div>اتوماسیون یکپارچه نرم افزارهای شبکه</div>
                                        <div>سامانه جامع پرسش و پاسخ اینترنتی</div>
                                        <div> فروشگاه اینترنتی محصولات دیجیتال</div>
                                        <div>نرم افزار مدیریت املاک تحت شبکه</div>
                                        <div>سامانه پیش انتخاب واحد دانشگاه</div>
                                        <div>وب سایت مرکز رشد فناور دانشگاه</div>
                                        <div>داده کاوی و کاربردهای آن</div>
                                    </div>
                                </div>

                                <div className="work-item">
                                    <div className="work-item-date">
                                        سال 1395 تا 1396
                                    </div>
                                    <div className="work-item-title">
                                        مدیر آموزش
                                        <span className="work-item-organization"> - پژوهشکده ثامن </span>
                                    </div>
                                    <div className="work-item-description">
                                        <div> برگزاری دوره های تخصصی فناوری اطلاعات، شبکه، برنامه نویسی ویندوز و وب و موبایل (نمایندگی استان خراسان آزمایشگاه یادگیری لایتک دانشگاه صنعتی شریف)</div>
                                    </div>
                                </div>

                                <div className="work-item">
                                    <div className="work-item-date">
                                        سال 1394 تا 1395
                                    </div>
                                    <div className="work-item-title">
                                        مدیر آموزش
                                        <span className="work-item-organization"> - فناوران توسعه امن ناجی </span>
                                    </div>
                                    <div className="work-item-description">
                                        <div>برگزاری دوره های تخصصی فناوری اطلاعات، شبکه، برنامه نویسی ویندوز و وب و موبایل (نمایندگی رسمی پلیس فتای نیروی انتظامی در استان خراسان رضوی)</div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default WorkPage