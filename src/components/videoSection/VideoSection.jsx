import styles from "./videoSection.module.css";

const VideoSection = () => (
  <section className={styles.videoSection}>
    <p className={styles.title}>CINESTAR STUDIO</p>
    <h1 className={styles.subtitle}>HAR DU EN IDÉ TIL DIT NÆSTE PROJEKT ?</h1>
    <p className={styles.text}>
      Lad os omsætte dine visioner til levende billeder, der fænger dit
      publikum. Hos os får du en professionel, kreativ proces fra idéudvikling
      til færdig produktion.
    </p>
    <div className={styles.videoWrapper}>
      <video controls width="100%">
        <source src="https://player.vimeo.com/external/332850482.sd.mp4?s=7e2e7e3e6e7e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3e3" />
        Din browser understøtter ikke video-tag'et.
      </video>
    </div>
    <h3 className={styles.subtitle2}>
      TØV IKKE MED AT VÆLGE CINESTAR TIL DIT NÆSTE FILM-PROJEKT
    </h3>
    <p className={styles.text}>
      Hos Cinestar kombinerer vi vores passion for historiefortælling med et
      skarpt øje for detaljen. Med moderne udstyr og et erfarent team sikrer vi,
      at din produktion løfter sig fra skitse til strålende slutresultat – hver
      gang.
    </p>

    <div className={styles.numbersContainer}>
      <div className={styles.number}>
        <span className={styles.count}>250+</span>
        <p className={styles.label}>FILM PRODUKTION</p>
      </div>
      <div className={styles.number}>
        <span className={styles.count}>78+</span>
        <p className={styles.label}>MUSIK VIDEO</p>
      </div>
      
    </div>
  </section>
);

export default VideoSection;
