import React from "react";
import styles from "./ReviewCard.module.css";

const ReviewCard = ({ review }) => {
  const { name, position, text, rating } = review;

  return (
    <div className={styles.card}>
      <div className={styles.rating}>
        {"★".repeat(rating)} {"☆".repeat(5 - rating)}
      </div>
      <p className={styles.text}>"{text}"</p>
      <div className={styles.footer}>
        <p className={styles.name}>{name.toUpperCase()}</p>
        <p className={styles.position}>{position}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
