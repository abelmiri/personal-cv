import React, {PureComponent} from "react"
import CertificateSvg from "../../Media/SVG/CertificateSvg"
import ReactTooltip from "react-tooltip"

class CertificatePage extends PureComponent
{
    constructor(props)
    {
        super(props)

        this.state = {}

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
                        <div>سوابق تحصیلات</div>
                        <div className="certificate-contents">
                            <div className="certificate-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1397 تا 1399</div>
                                    <div className="certificate-item-date">معدل 18.17</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندسی تکنولوژی نرم افزار
                                </div>
                                <div className="certificate-item-title-description"> کارشناسی ارشد</div>
                                <div className="certificate-item-description">دانشگاه فردوسی مشهد</div>
                            </div>
                            <div className="certificate-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1397 تا 1399</div>
                                    <div className="certificate-item-date">معدل 18.17</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندسی تکنولوژی نرم افزار
                                </div>
                                <div className="certificate-item-title-description"> کارشناسی ارشد</div>
                                <div className="certificate-item-description">دانشگاه فردوسی مشهد</div>
                            </div>
                            <div className="certificate-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1397 تا 1399</div>
                                    <div className="certificate-item-date">معدل 18.17</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندسی تکنولوژی نرم افزار
                                </div>
                                <div className="certificate-item-title-description"> کارشناسی ارشد</div>
                                <div className="certificate-item-description">دانشگاه فردوسی مشهد</div>
                            </div>
                            <div className="certificate-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1397 تا 1399</div>
                                    <div className="certificate-item-date">معدل 18.17</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندسی تکنولوژی نرم افزار
                                </div>
                                <div className="certificate-item-title-description"> کارشناسی ارشد</div>
                                <div className="certificate-item-description">دانشگاه فردوسی مشهد</div>
                            </div>
                            <div className="certificate-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1397 تا 1399</div>
                                    <div className="certificate-item-date">معدل 18.17</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندسی تکنولوژی نرم افزار
                                </div>
                                <div className="certificate-item-title-description"> کارشناسی ارشد</div>
                                <div className="certificate-item-description">دانشگاه فردوسی مشهد</div>
                            </div>
                            <div className="certificate-item-container" data-tip="دریافت مدرک">
                                <div className="certificate-item-svg-container">
                                    <CertificateSvg className="certificate-item-svg"/>
                                </div>
                                <div className="certificate-gpa-date-container">
                                    <div className="certificate-item-date">سال 1397 تا 1399</div>
                                    <div className="certificate-item-date">معدل 18.17</div>
                                </div>
                                <div className="certificate-item-title">
                                    مهندسی تکنولوژی نرم افزار
                                </div>
                                <div className="certificate-item-title-description"> کارشناسی ارشد</div>
                                <div className="certificate-item-description">دانشگاه فردوسی مشهد</div>
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