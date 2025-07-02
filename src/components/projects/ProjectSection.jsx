// src/components/sections/ProjectSection.jsx
import React from "react";
import ProjectCard from "./ProjectCard.jsx"; 
import styles from "./ProyectSection.module.css";
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Portafolio',
        description: 'Proyecto personal desarrollado con React, Vite y CSS Modules. Presenta mi perfil, proyectos, experiencia laboral y formulario de contacto.',
        tags: ['React', 'Vite', 'JavaScript', 'CSS Modules'],
        imageUrl: '/tp1.png', 
        githubUrl: 'https://github.com/lucasBonggio/portfolio-personal '
    },
    {
        title: 'Ejemplo 2',
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse libero cumque nam facere omnis ratione excepturi aspernatur animi. Quod animi laboriosam repellendus eos illum. Voluptatum laborum aperiam quam itaque sed?",
        tags: ['Java', 'Kotlin', 'MySQL'],
        imageUrl: '/tp1.png', 
        githubUrl: 'https://github.com/lucasBonggio/portfolio-personal '
    },
    {
        title: 'Ejemplo 3',
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus velit natus porro nemo. Eveniet deleniti optio itaque voluptatem, et iste magnam, beatae recusandae tenetur labore hic tempore non quidem facere.",
        tags: ['React', 'Kotlin', 'Java', 'APIs'],
        imageUrl: '/tp1.png', 
        githubUrl: 'https://github.com/lucasBonggio/portfolio-personal '
    }

];

const ProjectSection = () => {
return (
    <section id="projects" className={styles.section}>
    <div className={styles.container}>
        <h2 className={styles.title}>Proyectos</h2>
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
