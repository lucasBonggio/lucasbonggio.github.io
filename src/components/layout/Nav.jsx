import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import gitHubLogo from '../../../public/github-mark.svg';
import linkedinLogo from '../../../public/InBug-Black.png';

const Navbar = () => (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <ul className={styles.navLinks}>
                <li className={styles.navLink}><Link to="/about">Proyectos</Link></li>
                <li className={styles.navLink}><Link to="/projects">Resumen</Link></li>
                <li className={styles.navLink}><Link to="/contact">Contacto</Link></li>
            </ul>
            <div className={styles.mediaContainer}>
                <a href="https://github.com/lucasBonggio"><img className={styles.logoImg} src={gitHubLogo} alt="" /></a>
                <a href="https://www.linkedin.com/in/lucas-bonggio/"><img className={styles.logoImg} src={linkedinLogo} alt="" /></a>
            </div>
        </nav>
    </header>
);

export default Navbar;
