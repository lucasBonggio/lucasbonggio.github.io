import React from 'react';
import styles from './FooterSection.module.css';

const FooterSection = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.container}>
            <p className={styles.copyright}>
            © {new Date().getFullYear()} Lucas Bonggio | Portafolio personal desarrollado con React
            </p>
            <div className={styles.social}>
            <a href="https://github.com/lucasBonggio " target="_blank" rel="noopener noreferrer">
                GitHub
            </a>
            </div>
        </div>
        </footer>
    );
};

export default FooterSection;