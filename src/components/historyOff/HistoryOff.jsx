import styles from "./historyOff.module.css";

const HistoryOff = () => (
  <section className={styles.videoSection}>
    <p className={styles.title}>Historien</p>
    <h1 className={styles.subtitle}>HISTORIEN BAG CINESTAR</h1>
    <p className={styles.text}>
      Cinestar blev grundlagt med en passion for at fortælle historier, der
      fanger og bevæger sit publikum. Virksomheden begyndte som en lille
      uafhængig film- og tv-produktionsenhed med et klart fokus på originalt og
      visuelt engagerende indhold.
    </p>
    <img
        className={styles.filmingImage}
        src="/images/filming.jpg"
        alt="Cinestar historie"
    />
  </section>
);

export default HistoryOff;
