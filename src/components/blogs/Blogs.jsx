import React from "react";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import styles from "./blogs.module.css";

const Blogs = ({ limit, showDescription = true }) => {
  const { blogs, loading, error } = useFetchBlogs(
    "http://localhost:3042/blogs"
  );

  if (loading) return <p>Henter blogs...</p>;
  if (error) return <p>{error}</p>;
  if (blogs.length === 0) return <p>Ingen blogs fundet.</p>;


  const visibleBlogs = limit ? blogs.slice(0, limit) : blogs;

  return (
    <div>
      {visibleBlogs.map((blog) => (
        <div key={blog._id} style={{ marginBottom: "2rem" }}>
          <img src={blog.image} alt={blog.title} className={styles.blogImage} />
          <h3 className={styles.blogTitle}>{blog.title}</h3>
          <p className={styles.blogTeaser}>{blog.teaser}</p>
          
          {showDescription && <p>{blog.description}</p>}
          <small>{new Date(blog.created).toLocaleDateString("da-DK")}</small>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
