import React, { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaWhatsapp, FaInstagram, FaTwitter, FaFacebookF, FaGithub, FaGoogle, FaYoutube, FaPlus } from 'react-icons/fa';
import styles from '../css/Contact.module.css';

const Contact = () => {
  const form = useRef();
  const [menuActive, setMenuActive] = useState(false);
  const [menuInView, setMenuInView] = useState(false);

  useEffect(() => {
    const toggleBtn = document.querySelector(`.${styles.menuToggle}`);
    const menu = document.querySelector(`.${styles.menu}`);
    const menuSection = document.querySelector(`.${styles.section}`);

    const handleToggle = () => {
      setMenuActive((prev) => !prev);
    };

    const handleScroll = () => {
      const rect = menuSection.getBoundingClientRect();
      setMenuInView(rect.top < window.innerHeight && rect.bottom >= 0);
    };

    if (toggleBtn && menu) {
      toggleBtn.addEventListener("click", handleToggle);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener("click", handleToggle);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuActive]);

  useEffect(() => {
    const menu = document.querySelector(`.${styles.menu}`);
    if (menuInView && !menuActive) {
      menu.classList.add(styles.animate);
    } else {
      menu.classList.remove(styles.animate);
    }
  }, [menuInView, menuActive]);

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = {
      from_name: form.current.user_name.value,
      to_name: "Nisalka",
      from_email: form.current.user_email.value,
      to_email: "jayasinghnisalka@gmail.com",
      message: form.current.message.value,
    };

    emailjs.send('service_k349xgh', 'template_oe0szfp', formData, 'uBPzsmwQFComKhcz0')
      .then((result) => {
        console.log("Email sent successfully:", result.text);
        window.alert("Thank you. I will get back to you as soon as possible.");
      }, (error) => {
        console.error("Failed to send email:", error);
        window.alert("Ahh, something went wrong. Please try again.");
      })
      .finally(() => {
        e.target.reset();
      });
  };

  return (
    <div id="contact" className={styles.section}>
      <div className={styles.connectText}>Let's Connect</div>
      <form className={styles.form} onSubmit={sendEmail} ref={form}>
        <div>
          <label>Name:</label>
          <input type="text" name="user_name" placeholder="What's your name?" required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="user_email" placeholder="What's your email?" required />
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" placeholder="What's you want to say?" required />
        </div>
        <button type="submit">Send</button>
      </form>

      <div className={`${styles.menu} ${menuActive ? styles.active : ''}`}>
        <div className={styles.menuToggle}><FaPlus /></div>
        <li style={{ '--i': 0, '--clr': '#ddbd66' }}>
          <a href="https://www.instagram.com/_.nisalka._?igsh=MTE1anY2eTdhODk5eA=="><FaInstagram /></a>
        </li>
        <li style={{ '--i': 1, '--clr': '#ddbd66' }}>
          <a href="https://www.facebook.com/share/CJ4Bds9tkYLrQ6kW/?mibextid=qi2Omg"><FaFacebookF /></a>
        </li>
        <li style={{ '--i': 2, '--clr': '#ddbd66' }}>
          <a href="https://x.com/Nisalka_?t=s23RomhIKjA2ITPCe250cg&s=08"><FaTwitter /></a>
        </li>
        <li style={{ '--i': 3, '--clr': '#ddbd66' }}>
          <a href="https://github.com/NisalkaJay"><FaGithub /></a>
        </li>
        <li style={{ '--i': 4, '--clr': '#ddbd66' }}>
          <a href="https://www.linkedin.com/in/nisalka-jayasinghe-863b33287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
        </li>
        <li style={{ '--i': 5, '--clr': '#ddbd66' }}>
          <a href="https://www.google.com/"><FaGoogle /></a>
        </li>
        <li style={{ '--i': 6, '--clr': '#ddbd66' }}>
          <a href="https://www.youtube.com/"><FaYoutube /></a>
        </li>
        <li style={{ '--i': 7, '--clr': '#ddbd66' }}>
          <a href="https://wa.me/94768095818"><FaWhatsapp /></a>
        </li>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Nisalka. All rights reserved.
      </div>
    </div>
  );
};

export default Contact;
