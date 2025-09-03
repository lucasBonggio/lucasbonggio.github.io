import profilePic from '../../../public/perfil.jpg'
import styles from './Hero.module.css';
import { Link as ScrollLink } from 'react-scroll';

const HeroSection = () => (
    <section className={styles.hero} id='about'>
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img className={styles.profileImage} src={profilePic} alt="" />
            </div>
            <div className={styles.infoWrapper}>
                <h2>Hola, soy Lucas Bonggio.</h2>
                <h1>Desarrollador Backend.</h1>
                <h3>Apasionado por crear soluciones eficientes y escalables, con foco en el diseño limpio y la lógica detrás de cada sistema. Siempre en evolución, buscando crecer con cada línea de código.</h3>
                <div className={styles.buttonsWrapper}>
                    <a className={styles.btn} href="/lucas-bonggio-CV.pdf" download>DESCARGAR MI CV</a>
                    <ScrollLink 
                    to="contact"
                    smooth={true}
                    duration={500}
                    className={styles.btnContact}
                    >
                    CONTÁCTAME
                    </ScrollLink>                
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;
