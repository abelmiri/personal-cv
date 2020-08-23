import React, {PureComponent} from "react"
import MainSideBar from "./View/Components/MainSideBar"
import IntroPage from "./View/Pages/IntroPage"
import AboutPage from "./View/Pages/AboutPage"

class App extends PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            lang: "fa",
            selected: "intro",
            devtoolsOpen: false,
        }
    }

    componentDidMount()
    {
        if (process.env.NODE_ENV === "production")
        {
            const element = new Image()
            let devtoolsOpen = false
            element.__defineGetter__("id", () => devtoolsOpen = true)
            setInterval(() =>
            {
                devtoolsOpen = false
                console.log(element)
                if (devtoolsOpen !== this.state.devtoolsOpen) this.setState({...this.state, devtoolsOpen})
            }, 1000)
        }
    }

    select = (selected) =>
    {
        this.setState({...this.state, selected})
    }

    render()
    {
        const {selected, devtoolsOpen} = this.state
        if (!devtoolsOpen)
            return (
                <div className="main">
                    <MainSideBar selected={selected} onSelect={(selected) => this.select(selected)}/>
                    {
                        selected === "intro" &&
                        <div className="intro-container">
                            <IntroPage onSelect={(selected) => this.select(selected)}/>
                        </div>
                    }
                    {
                        selected === "about" &&
                        <div className="about-container">
                            <AboutPage/>
                        </div>
                    }
                    {/*{*/}
                    {/*    selected === "certificate" &&*/}
                    {/*    <div className="">B</div>*/}
                    {/*}*/}
                </div>
            )
        else return <div style={{textAlign: "center", padding: "20px", direction: "ltr"}}>Please Close Inspect Babe :)</div>
    }
}

export default App
