import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";
import styles from './Contact.module.css';

const serviceId = 'service_7838jn4';
const templateId = 'template_f6y8mw9';
const publicKey = 'UDjWgMmHZKH3DpAQ4';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        sendForm(serviceId, templateId, form.current, publicKey)
        .then((result) => {
            console.log('Email enviado:', result.text);
            alert("Mensaje enviado con éxito!");
            e.target.reset();
        })
        .catch((error) => {
            console.error('Error al enviar el email:', error);
            alert("Hubo un error al enviar el mensaje, revisá la consola.");
        });
    };

    return(
        <section className={styles.contact} id="contact">
            <h2>CONTACTO</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className={styles.inputContainer}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="user_email" required />
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" rows="5" required className={styles.textarea} />
                </div>

                <button type="submit">Enviar</button>
            </form>
        </section>
    );
};

export default Contact;
