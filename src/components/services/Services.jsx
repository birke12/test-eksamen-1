import styles from "./services.module.css";
import { FaFilm, FaMusic } from "react-icons/fa";
import { MdOutlineMovieFilter, MdOutlineOndemandVideo } from "react-icons/md";

const services = [
  {
    icon: <FaFilm className={styles.icon} />,
    title: "FILM PRODUKTION",
    text: "Vi skaber professionelle filmproduktioner, der formidler dit budskab klart, engagerende og visuelt overbevisende.",
  },
  {
    icon: <MdOutlineMovieFilter className={styles.icon} />,
    title: "EN KREATIV RETNING",
    text: "Vi sikrer en kreativ retning, der løfter dit projekt fra almindeligt til uforglemmeligt.",
  },
  {
    icon: <MdOutlineOndemandVideo className={styles.icon} />,
    title: "TV PRODUKTION",
    text: "Vi leverer komplette løsninger inden for formatudvikling, optagelse og redigering.",
  },
  {
    icon: <FaMusic className={styles.icon} />,
    title: "MUSIK VIDEO",
    text: "Lad din musik træde frem i et visuelt univers, der forstærker din lyd og dit budskab.",
  },
];

const ServiceSection = () => {
  return (
    <section className={styles.serviceSection}>
      <p className={styles.header}>SERVICE</p>
      <h2 className={styles.title}>HVILKEN SERVICE TILBYDER VI ?</h2>
      <div className={styles.services}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceItem}>
            {service.icon}
            <div className={styles.serviceContent}>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceText}>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
