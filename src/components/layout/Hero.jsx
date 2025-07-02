import profilePic from '../../../public/example.jpg'
import styles from './Hero.module.css';

const HeroSection = () => (
    <section className={styles.hero} id='about'>
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <img className={styles.profileImage} src={profilePic} alt="" />
            </div>
            <div className={styles.infoWrapper}>
                <h2>Hola, soy John Doe. </h2>
                <h1>Desarrollador Backend en Java.</h1>
                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eligendi ad numquam adipisci optio ab repellat minus error autem, quis, eaque vitae quod ullam nisi. Repellat, aliquam. Nihil, explicabo ex?
                </h3>
                <div className={styles.buttonsWrapper}>
                    <a className={styles.btn} href="">Descargar mi CV</a>
                    <a className={styles.btnContact} href="">Contáctame</a>
                </div>
            </div>
        </div>
    </section>
);

export default HeroSection;