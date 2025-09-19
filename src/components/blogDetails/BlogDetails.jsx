import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import styles from "./blogDetails.module.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isLoading, error, getBlogById } = useFetchBlogs();

  useEffect(() => {
    if (id) getBlogById(id);
  }, [id]);

  if (isLoading) return <p>Henter blog...</p>;
  if (error) return <p>{error}</p>;
  if (!blog) return <p>Blog ikke fundet.</p>;

  return (
    <div className={styles.pageWrapper}>
      <article className={styles.blogCard}>
        <img src={blog.image} alt={blog.title} className={styles.blogImage} />
        <div className={styles.blogContent}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogTeaser}>{blog.teaser}</p>
          <p className={styles.blogDescription}>{blog.description}</p>
          <small className={styles.blogDate}>
            {new Date(blog.created).toLocaleDateString("da-DK")}
          </small>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
