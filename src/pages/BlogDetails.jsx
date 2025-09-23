// BlogDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import styles from "../style/blogDetails.module.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { get } = useFetch();
  const [blog, setBlog] = useState({});

  const fetchBlog = async () => {
    try {
      const blogData = await get.blog(id);
      console.log("Blog data:", blogData); // ✅ for debugging
      setBlog(blogData.data); // mirror InfoStay: always pull from .data
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  useEffect(() => {
    if (id) fetchBlog();
  }, [id]);

  if (!blog) return <p>Blog ikke fundet.</p>;

  return (
    <div className={styles.pageWrapper}>
      <article className={styles.blogCard}>
        <img src={blog.image} alt={blog.title} className={styles.blogImage} />
        <div className={styles.blogContent}>
          <h1 className={styles.blogTitle}>{blog.title}</h1>
          <p className={styles.blogTeaser}>{blog.teaser}</p>
          <p className={styles.blogDescription}>{blog.description}</p>
        {/*   <small className={styles.blogDate}>
            {new Date(blog.created).toLocaleDateString("da-DK")}
          </small> */}
        </div>
      </article>

      {/* ✅ Back button */}
      <Link to="/blogPages" className={styles.backBtn}>
        ← Tilbage til blogs
      </Link>
    </div>
  );
};

export default BlogDetails;
