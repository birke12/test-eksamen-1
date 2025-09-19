import Blogs from "../components/blogs/Blogs";
import PageHeader from "../components/pageHeader/PageHeader";
import styles from "../style/blogPage.module.css";

const BlogPages = () => {
  return (
    <section className={styles.blogPagesection}>
      <PageHeader />
      <Blogs showDescription={false} />
    </section>
  );
};

export default BlogPages;
