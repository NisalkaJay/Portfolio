import React from 'react';
import styles from '../css/About.module.css';
import myPhoto from '../assets/my_personal-3.jpg';
import uiDevPhoto from '../assets/3d-computer.png';
import artistPhoto from '../assets/global-network.png';
import frontendPhoto from '../assets/computer.png';

const About = () => {
  return (
    <div id="about" className={styles.section}>
      <div className={styles.contentContainer}>
        <div className={styles.photoContainer}>
          <img src={myPhoto} alt="Your Name" className={styles.photo} />
        </div>
        <div className={styles.textContainer}>
        <h1 className={styles.heading}>Who I Am..</h1>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              I'm a creative coder who loves bringing digital dreams to life. From sleek UIs to mind-bending 3D visuals, I've got the skills to make it happen. React.js, Three.js, Figma, Blender - they're all tools in my digital playground. I can build complete experiences that'll amaze the users. Ready to craft something amazing together?
            </p>
          </div>
        </div>
      </div>
      <div className={styles.rolesContainer}>
        <div className={styles.role}>
          <img src={uiDevPhoto} alt="UI Development" className={styles.roleImage} />
          <h3>UI , UX Developer</h3>
        </div>
        <div className={styles.role}>
          <img src={artistPhoto} alt="3D Art" className={styles.roleImage} />
          <h3>3D Artist</h3>
        </div>
        <div className={styles.role}>
          <img src={frontendPhoto} alt="Frontend Development" className={styles.roleImage} />
          <h3>Frontend Developer</h3>
        </div>
      </div>
    </div>
  );
}

export default About;