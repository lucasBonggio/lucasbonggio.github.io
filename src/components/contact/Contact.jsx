import { section } from "framer-motion/client"
import styles from './Contact.module.css'

const Contact = () => {
    return(
        <section className={styles.contact} id="contact">
            <h2>CONTACTO</h2>
            <form>
            <div className={styles.inputContainer}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>

            <div className={styles.inputContainer}>
                <label htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="5" required className={styles.textarea} />
            </div>

            <button type="submit">Enviar</button>
            </form>

        </section>
    )
}

export default Contact;