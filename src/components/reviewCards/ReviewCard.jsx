import React from "react";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  const { name, position, text, rating } = review || {};

  return (
    <div className={styles.card}>
      <div className={styles.rating}>
        {"★".repeat(rating || 0)} {"☆".repeat(5 - (rating || 0))}
      </div>
      <p className={styles.text}>"{text || "Ingen tekst"}"</p>
      <div className={styles.footer}>
        <p className={styles.name}>{name ? name.toUpperCase() : "Ukendt"}</p>
        <p className={styles.position}>{position || "Ingen titel"}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
