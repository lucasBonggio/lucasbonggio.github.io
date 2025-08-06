
import React, { useState } from 'react';
import styles from './ProjectCard.module.css';

const ProjectCard = ({ title, description, tags, imageUrls, githubUrl }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex -1
        );
    };

    return (
        <div className={styles.card}>
            <div className={styles.carouselContainer}>
                <button onClick={handlePrev} className={styles.prevBtn}>❮</button>
                <img 
                    src={imageUrls[currentIndex]} 
                    alt={`${title} - Slide ${currentIndex + 1}`} 
                    className={styles.image} 
                />
                <button onClick={handleNext} className={styles.nextBtn}>❯</button>
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
                </div>
                <div className={styles.buttonContainer}>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    GITHUB
                    </a>
                    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    VER
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;