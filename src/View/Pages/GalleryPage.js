import React, {PureComponent} from "react"

class GalleryPage extends PureComponent
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
                    گالری<span className="intro-text-name"> تصاویر </span>
                    <div className="certificate-header-back-text">
                        مستندات تصویری
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default GalleryPage