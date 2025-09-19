import React from "react";
import Blogs from "../blogs/Blogs";
import styles from "./frontBlog.module.css";

const FrontBlog = () => (
  <section className={styles.frontBlogSection}>
    <h1 className={styles.title}>Seneste Nyt</h1>
    <h2 className={styles.subtitle}>Læs vores blog</h2>
    <p className={styles.text}>
      Her kan du læse de seneste nyheder, tips og historier fra Cinestar. Vi
      deler inspiration, erfaringer og indblik i film- og tv-branchen.
    </p>

    <Blogs limit={1} showDescription={false} />
  </section>
);

export default FrontBlog;
