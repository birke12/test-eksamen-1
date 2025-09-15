import styles from "./pageHeader.module.css";
import headerBg from "/images/studio.jpg";

const PageHeader = () => {
  const headerStyle = {
    background: `url(${headerBg}) center/cover no-repeat`,
  };

  return (
    <header className={styles.pageHeader} style={headerStyle}>
      <div className={styles.overlay}></div>
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        <span className={styles.subtitle}>CINESTAR STUDIO</span>
        <h1>
          FILM & TV <br />
          <span className={styles.highlight}>PRODUKTION</span>
        </h1>
        <p>
          Vi skaber levende fortællinger, der fanger dit publikum. Fra idé til
          færdigt produkt leverer vi professionelle film- og tv-løsninger, der
          gør din historie uforglemmelig.
        </p>
      </div>
    </header>
  );
};

export default PageHeader;
