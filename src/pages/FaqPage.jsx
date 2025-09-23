
import { useState } from "react";
import useFetchFaq from "../hooks/useFetch"; 
import styles from "../style/faqPage.module.css";

const Faq = () => {
  const { faq, loading, error } = useFetchFaq("/api/faq"); 
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading) return <p>Loading FAQs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.header}>Ofte stillede spørgsmål</h2>
      <p className={styles.intro}>
        Her finder du svar på de spørgsmål, vi oftest bliver stillet om vores
        processer, tjenester og produktioner. Har du brug for yderligere
        information? Tøv ikke med at kontakte os!
      </p>

      {faq.map((item, index) => (
        <div key={index} className={styles.accordionItem}>
          <button
            className={styles.accordionButton}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <span>{openIndex === index ? "−" : "+"}</span>
          </button>
          <div
            className={`${styles.accordionContent} ${
              openIndex === index ? styles.open : ""
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
