import React, {PureComponent} from "react"
import IntroPicture from "../Components/IntroPicture"
import IntroText from "../Components/IntroText"

class IntroPage extends PureComponent
{
    constructor(props)
    {
        super(props)

        this.state = {}

    }

    render()
    {
        const {onSelect, OnHover} = this.props
        return (
            <React.Fragment>
                <div className="intro-animated-background"/>
                <IntroPicture/>
                <IntroText onSelect={(selected) => onSelect(selected)} OnHover={(selected) => OnHover(selected)}/>
            </React.Fragment>
        )
    }
}

export default IntroPage