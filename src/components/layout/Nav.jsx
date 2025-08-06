import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import gitHubLogo from '../../../public/github-mark.svg';
import linkedinLogo from '../../../public/InBug-Black.png';

import { Link as ScrollLink } from 'react-scroll';

const Nav = () => {
    return (
        <header className={styles.header}>
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}><ScrollLink to="about" smooth={true} duration={500} offset={-160}>SOBRE MÍ</ScrollLink></li>
                <li className={styles.navLink}><ScrollLink to="projects" smooth={true} duration={500} offset={-130}>PROYECTOS</ScrollLink></li>
                <li className={styles.navLink}><ScrollLink to="technologies" smooth={true} duration={500} offset={-120} >TECNOLOGÍAS</ScrollLink></li>
                <li className={styles.navLink}><ScrollLink to="education" smooth={true} duration={500} offset={-150} >EDUCACIÓN</ScrollLink></li>
                <li className={styles.navLink}><ScrollLink to="contact" smooth={true} duration={500} offset={-150} >CONTACTO</ScrollLink></li>
            </ul>

            <div className={styles.mediaContainer}>
            <a href="https://github.com/lucasBonggio" target="_blank" rel="noopener noreferrer">
                <img className={styles.logoImg} src={gitHubLogo} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/lucas-bonggio/" target="_blank" rel="noopener noreferrer">
                <img className={styles.logoImg} src={linkedinLogo} alt="LinkedIn" />
            </a>
            </div>
        </nav>
        </header>
    );
};

export default Nav;
