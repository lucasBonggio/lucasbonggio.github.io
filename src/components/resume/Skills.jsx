import { section } from "framer-motion/client";
import javaLogo from '../../../public/java-icono.svg'; 
import mySqlLogo from '../../../public/mysql-icono.svg';
import javascriptLogo from '../../../public/javascript-icono.svg';
import styles from './Skills.module.css';
import htmlLogo from '../../../public/html-icono.svg';
import cssLogo from '../../../public/css-icono.svg';
import postmanLogo from '../../../public/postman-icono.svg';
import gitLogo from '../../../public/git-icono.svg';
import reactLogo from '../../../public/react-icono.svg';


const Skills = () => {
    return(
        <section className={styles.skillsSection} id="technologies">
            <h2>TECNOLOGÍAS</h2>
            <h3>HABILIDADES</h3>

            <div className={styles.itemsContainer}>
                <div className={styles.skillItem}>
                <img src={javaLogo} alt="" />
                <h3>JAVA</h3>
                </div>
                <div className={styles.skillItem}>
                    <img src={mySqlLogo} alt="" />
                    <h3>MYSQL</h3>
                </div>
                <div className={styles.skillItem}>
                    <img src={javascriptLogo} alt="" />
                    <h3>JAVASCRIPT</h3>
                </div>
                <div className={styles.skillItem}>
                    <img src={htmlLogo} alt="" />
                    <h3>HTML</h3>
                </div>
                <div className={styles.skillItem}>
                    <img src={cssLogo} alt="" />
                    <h3>CSS</h3>
                </div>
                <div className={styles.skillItem}>
                    <img src={reactLogo} alt="" />
                    <h3>REACT</h3>
                </div>
            </div>

            <h3>HERRAMIENTAS</h3>

            <div className={styles.toolsContainer}>
                <div className={styles.skillItem}>
                    <img src={postmanLogo} alt="" />
                    <h3>POSTMAN</h3>
                </div>
                <div className={styles.skillItem}>
                    <img src={gitLogo} alt="" />
                    <h3>GIT</h3>
                </div>
            </div>

        </section>
    );
}

export default Skills;