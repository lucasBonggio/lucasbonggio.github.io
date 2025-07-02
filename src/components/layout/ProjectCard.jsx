// src/components/sections/ProjectCard.jsx
import React from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, tags, imageUrl, githubUrl }) => {
    return (
        <div className={styles.card}>
            <img src={imageUrl} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
                </div>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                Ver en GitHub
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;