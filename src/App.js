import React, {PureComponent} from "react"
import MainSideBar from "./View/Components/MainSideBar"
import IntroPage from "./View/Pages/IntroPage"
import AboutPage from "./View/Pages/AboutPage"
import CertificatePage from "./View/Pages/CertificatePage"
import ResearchPage from "./View/Pages/ResearchPage"
import EducationPage from "./View/Pages/EducationPage"
import WorkPage from "./View/Pages/WorkPage"
import ContactPage from "./View/Pages/ContactPage"
import GalleryPage from "./View/Pages/GalleryPage"

class App extends PureComponent
{
    constructor(props)
    {
        super(props)
        this.state = {
            lang: "fa",
            selected: "intro",
            hovered: "",
            order: 1,
            devtoolsOpen: false,
        }
    }

    componentDidMount()
    {
        const list = ["intro", "about", "certificate", "research", "education", "work", "gallery", "contact"]
        if (process.env.NODE_ENV === "production")
        {
            const element = new Image()
            let devtoolsOpen = false
            element.__defineGetter__("id", () => devtoolsOpen = true)
            setInterval(() =>
            {
                devtoolsOpen = false
                if (devtoolsOpen !== this.state.devtoolsOpen) this.setState({...this.state, devtoolsOpen})
            }, 500)
        }
        document.addEventListener("mousewheel", (e =>
        {
            const {selected} = this.state
            console.log(document.body.scrollHeight)
            console.log(window.scrollY + window.innerHeight)
            if ((document.body.scrollHeight - (window.scrollY + window.innerHeight)) < 1 && e.wheelDelta < 0 && selected !== "contact")
                this.setState({...this.state, selected: list[list.indexOf(selected) + 1], hovered: "", order: list.indexOf(selected) + 1})
            if (window.scrollY === 0 && e.wheelDelta > 0 && selected !== "intro")
                this.setState({...this.state, selected: list[list.indexOf(selected) - 1], hovered: "", order: list.indexOf(selected) + 1})
        }))
    }

    select = (text) =>
    {
        const {selected} = this.state
        if (text !== selected) switch (selected)
        {
            case "intro":
                this.setState({...this.state, selected: text, hovered: "", order: 1})
                break
            case "about":
                this.setState({...this.state, selected: text, hovered: "", order: 2})
                break
            case "certificate":
                this.setState({...this.state, selected: text, hovered: "", order: 3})
                break
            case "research":
                this.setState({...this.state, selected: text, hovered: "", order: 4})
                break
            case "education":
                this.setState({...this.state, selected: text, hovered: "", order: 5})
                break
            case "work":
                this.setState({...this.state, selected: text, hovered: "", order: 6})
                break
            case "gallery":
                this.setState({...this.state, selected: text, hovered: "", order: 7})
                break
            case "contact":
                this.setState({...this.state, selected: text, hovered: "", order: 8})
                break
            default:
                this.setState({...this.state, selected: text, hovered: "", order: 1})
                break
        }
    }

    hover = (hovered) =>
    {
        this.setState({...this.state, hovered})
    }

    render()
    {
        const {selected, hovered, devtoolsOpen, order} = this.state
        if (!devtoolsOpen)
            return (
                <div className="main">
                    <MainSideBar selected={selected} hovered={hovered} onSelect={(selected) => this.select(selected)}/>
                    {
                        selected === "intro" &&
                        <div className={`intro-container ${order <= 1 ? "is-next" : "is-previous"}`}>
                            <IntroPage onSelect={(selected) => this.select(selected)} OnHover={(selected) => this.hover(selected)}/>
                        </div>
                    }
                    {
                        selected === "about" &&
                        <div className={`about-container ${order < 2 ? "is-next" : "is-previous"}`}>
                            <AboutPage/>
                        </div>
                    }
                    {
                        selected === "certificate" &&
                        <div className={`certificate-research-education-container ${order < 3 ? "is-next" : "is-previous"}`}>
                            <CertificatePage/>
                        </div>
                    }
                    {
                        selected === "research" &&
                        <div className={`certificate-research-education-container ${order < 4 ? "is-next" : "is-previous"}`}>
                            <ResearchPage/>
                        </div>
                    }
                    {
                        selected === "education" &&
                        <div className={`certificate-research-education-container ${order < 5 ? "is-next" : "is-previous"}`}>
                            <EducationPage/>
                        </div>
                    }
                    {
                        selected === "work" &&
                        <div className={`certificate-research-education-container ${order < 6 ? "is-next" : "is-previous"}`}>
                            <WorkPage/>
                        </div>
                    }
                    {
                        selected === "gallery" &&
                        <div className={`certificate-research-education-container ${order < 7 ? "is-next" : "is-previous"}`}>
                            <GalleryPage/>
                        </div>
                    }
                    {
                        selected === "contact" &&
                        <div className={`contact-container ${order < 8 ? "is-next" : "is-previous"}`}>
                            <ContactPage/>
                        </div>
                    }
                </div>
            )
        else return <div style={{textAlign: "center", padding: "20px", direction: "ltr"}}>It's Beautiful, isn't it?</div>
    }
}

export default App
