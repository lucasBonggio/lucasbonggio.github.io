import styles from './Education.module.css'

const Education = () => {
    return(
        <section className={styles.educationSection} id='education'>
                <h2>EDUCACIÓN</h2>
                <div className={styles.itemSection}>
                    <h2>Tecnicatura en Desarrollo de Software</h2>
                    <h4>Instituto de Formación Técnica Superior Nº11</h4>
                    <p>2025 - En curso</p>
                </div>
                
                <hr className={styles.divider} />
                
                <div className={styles.itemSection}>
                    <h2>Curso Programador</h2>
                    <h4>Centro de Formación Profesional Nº8 - SMATA</h4>
                    <p>2024 - 2025</p>
                </div>
        </section>
    );
}

export default Education;