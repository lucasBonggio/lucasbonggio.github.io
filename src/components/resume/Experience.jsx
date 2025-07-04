import styles from './Experience.module.css';

const Experience = () => {
    return(
        <section className={styles.experienceSection} id='experience'>
            <h2>EXPERIENCIA</h2>
            <div className={styles.experienceItem}>
                <h3>Desarrollador Freelancer</h3>
                <h4>E-commerce para Servicio Técnico</h4>
                <p>Junio - Julio 2025</p>
                <ul className={styles.listItems}>
                    <li>Desarrollé un sistema de e-commerce fullstack con Java (Spring Boot) y React.</li>
                    <li>Modelé entidades como productos, usuarios, pedidos, reseñas y categorías, con relaciones complejas.</li>
                    <li>Implementé funcionalidades como login, panel de administración, carrito de compras y filtros.</li>
                    <li>Usé MySQL para la base de datos, Git para control de versiones y realicé pruebas unitarias.</li>
                </ul>
            </div>
        </section>

    )
}
export default Experience;