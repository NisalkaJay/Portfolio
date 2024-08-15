import React from 'react'
import styles from '../css/tech.module.css';

import figma from '../assets/Figma_.png';
import react from '../assets/React_.png';
import css from '../assets/Css3_.png';
import javascript from '../assets/javascript_.png';
import html from '../assets/Html5_.png';
import github from '../assets/Github_.png';
import blender from '../assets/blender.png';
import tailwind from '../assets/Tailwind_.png';


const Tech = () => {
  return (
    <div id="tech" className={styles.section}>
      <div className={styles.connectText}>Let's Connect</div>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Tech<span className={styles.span}> Stack</span></h1>
      </div>
      <div className={styles.banner}>
        <div className={styles.slider} style={{ '--quantity': 8 }}>
          <div className={styles.item} style={{ '--position': 1 }}><img src={figma} alt=''/></div>
          <div className={styles.item} style={{ '--position': 2 }}><img src={react} alt=''/></div>
          <div className={styles.item} style={{ '--position': 3 }}><img src={css} alt=''/></div>
          <div className={styles.item} style={{ '--position': 4 }}><img src={javascript} alt=''/></div>
          <div className={styles.item} style={{ '--position': 5 }}><img src={html} alt=''/></div>
          <div className={styles.item} style={{ '--position': 6 }}><img src={github} alt=''/></div>
          <div className={styles.item} style={{ '--position': 7 }}><img src={blender} alt=''/></div>
          <div className={styles.item} style={{ '--position': 8 }}><img src={tailwind} alt=''/></div>
        </div>
      </div>
    </div>
  )
}

export default Tech;