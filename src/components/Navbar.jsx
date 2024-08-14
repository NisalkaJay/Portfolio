import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Navbar.module.css';
import menuIcon from '../assets/menu.svg';
import closeIcon from '../assets/close.svg';
import MyCV from '../files/blender.pdf'

const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'projects', title: 'Projects' },
  { id: 'tech', title: 'Technologies' },
  { id: 'contact', title: 'Contact' },
];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollTop >= sectionTop - 50 && scrollTop < sectionTop + sectionHeight - 50) {
            setActive(nav.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActive(id);
    }
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = MyCV; 
    link.download = 'Nisalka_jayasinghe_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContent}>
        <button onClick={downloadCV} className={styles.downloadButton}>
          DOWNLOAD CV
        </button>

        <ul className={styles.navList}>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${styles.navItem} ${active === nav.id ? styles.active : ''}`}
              onClick={() => setActive(nav.id)}
            >
              <a
                href={`#${nav.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(nav.id);
                  setToggle(false);
                }}
                className={styles.navLink}
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.mobileMenu}>
          <img
            src={toggle ? closeIcon : menuIcon}
            alt='menu'
            className={styles.menuIcon}
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${styles.mobileNavList} ${toggle ? styles.show : ''}`}>
            <ul>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${styles.mobileNavItem} ${active === nav.id ? styles.active : ''}`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.id);
                  }}
                >
                  <a
                    href={`#${nav.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(nav.id);
                      setToggle(false);
                    }}
                    className={styles.mobileNavLink}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
