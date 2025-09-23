import React, { useState, useEffect } from "react";
import ReviewCard from "../reviewCards/ReviewCard";
import styles from "./Reviews.module.css";
import useFetch from "../../hooks/useFetch";

const Reviews = () => {
  const { get, error, isLoading } = useFetch();
  const [reviews, setReviews] = useState([]);
  const [centerIdx, setCenterIdx] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await get.reviews(); // full response
        setReviews(response.data); // ✅ use response.data
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  const prevCard = () => {
    setCenterIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextCard = () => {
    setCenterIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  if (isLoading) return <p>Henter anmeldelser...</p>;
  if (error) return <p>{error}</p>;
  if (reviews.length === 0) return <p>Ingen anmeldelser endnu.</p>;

  const getCards = () => {
    if (reviews.length < 3) {
      return reviews.map((rev, idx) => ({ ...rev, pos: idx }));
    }
    const leftIdx = (centerIdx - 1 + reviews.length) % reviews.length;
    const rightIdx = (centerIdx + 1) % reviews.length;
    return [
      { ...reviews[leftIdx], pos: "left" },
      { ...reviews[centerIdx], pos: "center" },
      { ...reviews[rightIdx], pos: "right" },
    ];
  };

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.header}>
        <p className={styles.subtitle}>UDTALELSER</p>
        <h2 className={styles.title}>
          Hvad siger vores samarbejdspartnere om os?
        </h2>
      </div>

      <div className={styles.carousel}>
        <div className={styles.arrowContainer}>
          <button className={`${styles.arrow} ${styles.left}`} onClick={prevCard}>
            &lt;
          </button>
        </div>

        <div className={styles.cardsWrapper}>
          {getCards().map((rev, idx) => (
            <div
              key={rev._id || idx}
              className={
                rev.pos === "center"
                  ? styles.cardCenter
                  : rev.pos === "left"
                  ? styles.cardLeft
                  : styles.cardRight
              }
              onClick={() =>
                rev.pos !== "center" &&
                setCenterIdx(
                  rev.pos === "left"
                    ? centerIdx === 0
                      ? reviews.length - 1
                      : centerIdx - 1
                    : centerIdx === reviews.length - 1
                    ? 0
                    : centerIdx + 1
                )
              }
              style={{
                cursor: rev.pos !== "center" ? "pointer" : "default",
              }}
            >
              <ReviewCard review={rev} />
            </div>
          ))}
        </div>

        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={nextCard}
        >
          &gt;
        </button>
      </div>
    </section>
  );
};

export default Reviews;
