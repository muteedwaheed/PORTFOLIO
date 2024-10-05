import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const whatsappNumber = "923075327925"; // Replace with your WhatsApp number

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I'm Muteeb</h1>
        <p className={styles.description}>
          I'm a frontend developer using React. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:muteebwaheed6@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/muteeb.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        className={styles.whatsappBtn} 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </section>
  );
};
