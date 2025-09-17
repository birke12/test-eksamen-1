import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [submittedName, setSubmittedName] = useState(""); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

   
    setSubmittedName(formData.name);

   
    setModalOpen(true);

    
    setFormData({ name: "", subject: "", message: "" });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.info}>
        <p className={styles.label}>KONTAKT</p>
        <h2 className={styles.title}>BOOK EN SAMTALE MED OS</h2>
        <p className={styles.description}>
          Har du spørgsmål eller ønsker du at vide mere om, hvordan vi kan
          hjælpe med dit næste projekt? Udfyld formularen, og vi kontakter dig
          hurtigst muligt. Vi ser frem til at samarbejde med dig!
        </p>
        <div className={styles.contactDetails}>
          <p>
            <FaPhoneAlt className={styles.icon} style={{ color: "#ff6a3d" }} />{" "}
            +45 12 34 56 78
          </p>
          <p>
            <FaEnvelope className={styles.icon} style={{ color: "#ff6a3d" }} />{" "}
            info@cinestar.dk
          </p>
          <p>
            <FaMapMarkerAlt
              className={styles.icon}
              style={{ color: "#ff6a3d" }}
            />{" "}
            Filmbyen 1, 8000 Aarhus
          </p>
        </div>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Navn"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Emne"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Besked"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send besked</button>
      </form>

      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <p className={styles.modalTitle}>Tak for beskeden {submittedName}!</p>
            <h3 className={styles.modalSubtile}>
              Din besked er sendt. Vi vender tilbage hurtigst muligt.
            </h3>
            <button onClick={closeModal}>Luk</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
