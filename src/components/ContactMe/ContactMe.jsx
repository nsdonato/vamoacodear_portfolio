import { ContactForm } from "../ContactForm/ContactForm"
import "./ContactMe.css"

export const ContatcMe = () => {
    return (
        <section id="contact">
            <div class="contact_header">
                <h1 class="contact_title">CONTACT ME</h1>
                <div class="contact_guion"></div>
            </div>
            <ContactForm />
        </section>
    )
}