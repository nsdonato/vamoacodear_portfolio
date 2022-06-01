import Button from "../Button/Button"
import "./Contac-Form.css"

export function ContactForm() {
    return (
        <form className="contact_form" action="/contact" method="post">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email Addres" />
            <input type="text" name="phone" id="phone" placeholder="Phone Number" />
            <textarea rows="6" placeholder="Message"></textarea>
            <Button />
        </form>
    )
}