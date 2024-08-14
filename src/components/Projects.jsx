import React, { useEffect, useRef } from 'react';
import styles from '../css/Project.module.css';

const Projects = () => {
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  useEffect(() => {
    const next = nextRef.current;
    const prev = prevRef.current;

    const handleNext = () => {
      const items = document.querySelectorAll(`.${styles.projectsSliderItem}`);
      const slide = document.querySelector(`.${styles.projectsSliderList}`);
      slide.appendChild(items[0]);
    };

    const handlePrev = () => {
      const items = document.querySelectorAll(`.${styles.projectsSliderItem}`);
      const slide = document.querySelector(`.${styles.projectsSliderList}`);
      slide.prepend(items[items.length - 1]);
    };

    if (next && prev) {
      next.addEventListener('click', handleNext);
      prev.addEventListener('click', handlePrev);
    }

    // Cleanup event listeners on component unmount
    return () => {
      if (next && prev) {
        next.removeEventListener('click', handleNext);
        prev.removeEventListener('click', handlePrev);
      }
    };
  }, []);

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.connectText}>My Work!</div>
      <div className={styles.projectsSliderList}>
        <div className={styles.projectsSliderItem} style={{ backgroundImage: 'url(https://i.ibb.co/qCkd9jS/img1.jpg)' }}>
          <div className={styles.projectsSliderContent}>
            <div className={styles.projectsSliderName}>Switzerland</div>
            <div className={styles.projectsSliderDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button className={styles.projectsSliderButton}>See More</button>
          </div>
        </div>
        <div className={styles.projectsSliderItem} style={{ backgroundImage: 'url(https://i.ibb.co/jrRb11q/img2.jpg)' }}>
          <div className={styles.projectsSliderContent}>
            <div className={styles.projectsSliderName}>Finland</div>
            <div className={styles.projectsSliderDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button className={styles.projectsSliderButton}>See More</button>
          </div>
        </div>
        <div className={styles.projectsSliderItem} style={{ backgroundImage: 'url(https://i.ibb.co/NSwVv8D/img3.jpg)' }}>
          <div className={styles.projectsSliderContent}>
            <div className={styles.projectsSliderName}>Iceland</div>
            <div className={styles.projectsSliderDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button className={styles.projectsSliderButton}>See More</button>
          </div>
        </div>
        <div className={styles.projectsSliderItem} style={{ backgroundImage: 'url(https://i.ibb.co/Bq4Q0M8/img4.jpg)' }}>
          <div className={styles.projectsSliderContent}>
            <div className={styles.projectsSliderName}>Australia</div>
            <div className={styles.projectsSliderDescription}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, eum!</div>
            <button className={styles.projectsSliderButton}>See More</button>
          </div>
        </div>
      </div>

      <div className={styles.projectsNavigationArrows}>
        <button className={styles.projectsPrev} ref={prevRef}>
          {/* Example SVG for left arrow */}
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 19l-7-7 7-7" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={styles.projectsNext} ref={nextRef}>
          {/* Example SVG for right arrow */}
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 5l7 7-7 7" stroke="#ffffff" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Projects;
