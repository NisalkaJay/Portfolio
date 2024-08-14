import React from 'react'
import styles from '../css/tech.module.css';

const Tech = () => {
  return (
    <div id="tech" className={styles.section}>
      <div className={styles.connectText}>Let's Connect</div>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}>Tech<span className={styles.span}> Stack</span></h1>
      </div>
      <div className={styles.banner}>
        <div className={styles.slider} style={{ '--quantity': 8 }}>
          <div className={styles.item} style={{ '--position': 1 }}><img src="src\assets\Figma_.png" alt=''/></div>
          <div className={styles.item} style={{ '--position': 2 }}><img src="src\assets\React_.png" alt=''/></div>
          <div className={styles.item} style={{ '--position': 3 }}><img src="src\assets\Css3_.png" alt=''/></div>
          <div className={styles.item} style={{ '--position': 4 }}><img src="src\assets\Javascript_.png" alt=''/></div>
          <div className={styles.item} style={{ '--position': 5 }}><img src="src\assets\Html5_.png" alt=''/></div>
          <div className={styles.item} style={{ '--position': 6 }}><img src="src\assets\Github_.png" alt=''/></div>
          <div className={styles.item} style={{ '--position': 7 }}><img src="src\assets\blender.png" alt=''/></div>
          <div className={styles.item} style={{ '--position': 8 }}><img src="src\assets\Tailwind_.png" alt=''/></div>
        </div>
      </div>
    </div>
  )
}

export default Tech;