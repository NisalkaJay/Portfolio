import React, { useEffect } from 'react';
import styles from '../css/Home.module.css';

// Import images
import frontMount from '../assets/front_mount.png';
import backMount from '../assets/back_mount.png';
import cone from '../assets/cone.png';
import ball from '../assets/ball.png';
import rectangle from '../assets/rectangle.png';

const Home = () => {

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      document.querySelector(`.${styles.backMount}`).style.transform = `translateY(${scrollPosition * 0.3}px)`;
      document.querySelector(`.${styles.frontMount}`).style.transform = `translateY(${scrollPosition * 0.6}px)`;
      document.querySelector(`.${styles.ball}`).style.transform = `translate(-70%, calc(80% + ${scrollPosition * -0.5}px))`;
      document.querySelector(`.${styles.cone}`).style.transform = `translate(-780%, calc(-100% + ${scrollPosition * 1.2}px))`;
      document.querySelector(`.${styles.rectangle}`).style.transform = `translate(700%, calc(-150% + ${scrollPosition * 1.2}px))`;

      const combinedOffset = `calc(-50% + ${scrollPosition * 0.5}px)`;

      document.querySelector(`.${styles.textContainer}`).style.transform = `translate(-50%, calc(-50% + ${scrollPosition * 0.5}px))`;

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="home" className={styles.section}>
      <img src={backMount} alt="bMount" className={`${styles.parallaxLayer} ${styles.backMount}`} />
      <img src={frontMount} alt="fMount" className={`${styles.parallaxLayer} ${styles.frontMount}`} />
      <img src={ball} alt="ball" className={`${styles.parallaxLayer} ${styles.ball}`} />
      <img src={cone} alt="cone" className={`${styles.parallaxLayer} ${styles.cone}`} />
      <img src={rectangle} alt="rectangle" className={`${styles.parallaxLayer} ${styles.rectangle}`} />

      <div className={styles.textContainer}>
        <h1 className={`${styles.parallaxLayer} ${styles.centerText}`}>
          Hi!..<span className={styles.name}>I'm Nisalka</span>
        </h1>
        <h2 className={styles.tagline}>
          I develop user intertfaces, 
          web applications and 3D visuals</h2>
      </div>
    </div>
  );
};

export default Home;
