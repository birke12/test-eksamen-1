import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from "./blogs.module.css";

const Blogs = ({ limit, showDescription = false }) => {
  const { get, isLoading, error } = useFetch();
  const [blogs, setBlogs] = useState([]);

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const blogsData = await get.blogs();
      // If API returns { data: [...] }
      setBlogs(Array.isArray(blogsData) ? blogsData : blogsData.data || []);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setBlogs([]); // fallback to avoid breaking slice
    }
  };

  fetchBlogs();
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
