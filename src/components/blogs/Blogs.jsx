import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import styles from "./blogs.module.css";

const Blogs = ({ limit, showDescription = false }) => {
  const { data: blogs, isLoading, error, getBlogs } = useFetchBlogs();

  useEffect(() => {
    getBlogs("http://localhost:3042/blogs");
  }, []);

  if (isLoading) return <p>Henter blogs...</p>;
  if (error) return <p>{error}</p>;
  if (!blogs || blogs.length === 0) return <p>Ingen blogs fundet.</p>;

  const visibleBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <div>
      {visibleBlogs.map((blog) => (
        <div key={blog._id} className={styles.blogCard}>
          <img src={blog.image} alt={blog.title} className={styles.blogImage} />

          <div className={styles.blogContent}>
            <h3 className={styles.blogTitle}>{blog.title}</h3>
            <p className={styles.blogTeaser}>{blog.teaser}</p>
            {showDescription && (
              <p className={styles.blogDescription}>{blog.description}</p>
            )}
            <small className={styles.blogDate}>
              {new Date(blog.created).toLocaleDateString("da-DK")}
            </small>

            <Link to={`/blogs/${blog._id}`} className={styles.readMoreBtn}>
              Læs Mere
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
