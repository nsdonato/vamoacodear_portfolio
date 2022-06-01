import { ContactForm } from "../ContactForm/ContactForm"

export const ContatcMe = ()=>{
    return (
        <section id="contact">
            <div className="contact_header">
            <h1 className="contact_title">CONTACT ME</h1>
            <div className="contact_guion"></div>
            </div>
            <ContactForm />
        </section>
    )
}