import styles from "./awards.module.css";
import award1 from "/images/awards/award1.png";
import award2 from "/images/awards/award2.png";
import award3 from "/images/awards/award3.png";

const Awards = () => (
  <section className={styles.awardsSection}>
    <div className={styles.awardsImages}>
      <img src={award1} alt="Award 1" />
      <img src={award2} alt="Award 2" />
      <img src={award3} alt="Award 3" />
    </div>
  </section>
);

export default Awards;
