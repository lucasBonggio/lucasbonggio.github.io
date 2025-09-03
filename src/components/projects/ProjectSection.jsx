// src/components/sections/ProjectSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard.jsx"; 
import styles from "./ProyectSection.module.css";
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Portafolio',
        description: 'Proyecto personal que presenta mi perfil, proyectos destacados, experiencia laboral y un formulario de contacto. Diseñado con un estilo minimalista y profesional, este portafolio ofrece una experiencia clara y accesible. ',
        tags: ['React', 'Vite', 'JavaScript', 'CSS Modules'],
        imageUrls: ['/portafolio.jpg'], 
        githubUrl: 'https://github.com/lucasBonggio/portfolio-personal'
    },
    {
        title: 'Gestión de Estudio musical',
        description: "Desarrollo de una aplicación web Full Stack para gestionar un estudio musical. Permite administrar bandas, salas, reservas y servicios mediante operaciones CRUD, búsquedas dinámicas y modales interactivos. Integra una base de datos en la nube para facilitar la escalabilidad y gestión remota de datos, con una interfaz intuitiva y validaciones robustas para una experiencia fluida.",
        tags: ['Java', 'HTML', 'CSS', 'JavaScript', 'MySQL', 'Thymeleaf'],
        imageUrls: [
            '/gestion-principal.jpg',
            '/gestion-crearSala.jpg',
            '/gestion-salas.jpg'
        ],
        githubUrl: 'https://github.com/lucasBonggio/gestion-estudio.git'
    },
        {
        title: 'API RESTful - Ecommerce',
        description: "Desarrollo de una API RESTful para gestionar una tiendo tipo ecommerce. Permite administrar usuario, productos, categorias, direcciones de clientes , ordenes, favoritos y reseñas mediante operaciones CRUD. Integra una base de datos en MySQL e implementé métodos de seguridad como JWT y Paginación para una mejor performance en determiandas búsquedas. ",
        tags: ['Java', 'Spring boot', 'MySQL'],
        imageUrls: [
            '/api.jpg'
        ],
        githubUrl: 'https://github.com/lucasBonggio/gestion-estudio.git'
    }
];

const ProjectSection = () => {
return (
    <section id="projects" className={styles.projectSection}>
        <div className={styles.container}>
            <h2 className={styles.title}>PROYECTOS</h2>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.2 }}
            className={styles.grid}
            >
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
            </motion.div>
        </div>
    </section>
);
};


export default ProjectSection;
