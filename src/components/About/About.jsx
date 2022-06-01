import "./About.css"

export const About = () => {
    return (
        <section id="about">
            <h1 className="about_title">ABOUT</h1>
            <div className="about_guion"></div>
            <div className="about_text_container">
                <div className="about_text_1">
                    Freelancer is a free bootstrap theme <br />created by Start
                    Bootstrap. The<br />
                    download includes the complete source <br />files including HTML,
                    CSS, and<br />
                    JavaScript as well as optional SASS <br />stylesheets for easy
                    customization.
                </div>
                <div className="about_text_2">
                    You can create your own custom avatar <br />for the masthead, change
                    the icon in the <br />dividers, and add your email address to
                    <br />the contact form to make it fully <br />functional!
                </div>
            </div>
        </section>
    )
}