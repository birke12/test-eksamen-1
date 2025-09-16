import React, { useState } from "react";
import styles from "./Portfolio.module.css";

const images = [
  {
    src: "/images/daughter_mom.jpg",
    alt: "Daughter vs Mom",

  },
  {
    src: "/images/into_your_heart.jpg",
    alt: "Into Your Heart",
   
  },
];

const Portfolio = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.portfolio}>
      <h4 className={styles.subtitle}>PORTFOLIO</h4>
      <h2 className={styles.title}>UDVALGTE PROJEKTER</h2>

      <div className={styles.slider}>
        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prevSlide}
        >
          &#10094;
        </button>

        <div className={styles.slide}>
          <img
            src={images[current].src}
            alt={images[current].alt}
            className={styles.slideImage}
          />
          <div className={styles.slideText}>
            <h3>
              <span className={styles.highlight}>{images[current].title}</span>
            </h3>
            <p>{images[current].description}</p>
          </div>
        </div>

        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={nextSlide}
        >
          &#10095;
        </button>

        <div className={styles.dots}>
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`${styles.dot} ${
                current === idx ? styles.active : ""
              }`}
              onClick={() => setCurrent(idx)}
            ></span>
          ))}
        </div>
      </div>

      <div className={styles.text}>
        <p>
          Her præsenterer vi et udvalg af de produktioner, vi er stolte af at
          have skabt.
        </p>
        <p>
          Hvert projekt fortæller sin unikke historie og illustrerer vores
          ambition om at levere høj kvalitet, originalitet og visuel
          gennemslagskraft.
        </p>
        <p>Gå på opdagelse, og lad dig inspirere af vores arbejde.</p>
      </div>
    </section>
  );
};

export default Portfolio;
