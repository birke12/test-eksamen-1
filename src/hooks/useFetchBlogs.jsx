import { useState } from "react";

const useFetchBlogs = () => {
  const [data, setData] = useState(null); // can be array or single blog
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    "Content-Type": "application/json",
  };

  // Core request function
  const request = async (url) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url, { headers });
      if (!res.ok) throw new Error(`Failed: ${res.status} ${res.statusText}`);
      const result = await res.json();

      return Array.isArray(result?.data) ? result.data : result;
    } catch (err) {
      console.error("API error:", err);
      setError(err.message);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // Get all blogs
  const getBlogs = async () => {
    const blogs = await request("http://localhost:3042/blogs");
    setData(blogs);
    return blogs;
  };

  // Get single blog by ID (from all blogs)
  const getBlogById = async (id) => {
    const blogs = await getBlogs(); // fetch all blogs
    if (!blogs) return null;

    const blog = blogs.find((b) => b._id === id);
    if (!blog) {
      setError("Blog ikke fundet.");
      setData(null);
      return null;
    }

    setData(blog);
    return blog;
  };

  // Delete single blog by ID
  const deleteBlog = async (id) => {
    // First, fetch all blogs
    const blogs = await getBlogs();
    if (!blogs) return null;

    // Find the blog with the given ID
    const blog = blogs.find((b) => b._id === id);
    if (!blog) {
      setError("Blog ikke fundet.");
      return null;
    }

    // Send DELETE request to backend
    try {
      const response = await fetch(`http://localhost:3042/blogs/${id}`, {
        method: "DELETE",
      });

      const result = await response.json();

      if (result?.status === "ok") {
        // Refresh local blogs list
        await getBlogs();
      } else {
        setError(result?.message || "Fejl ved sletning af blog.");
      }

      return result;
    } catch (err) {
      console.error(err);
      setError("Fejl ved sletning af blog.");
      return null;
    }
  };

  return {
    data,
    isLoading,
    error,
    getBlogs,
    getBlogById,
    deleteBlog,
  };
};

export default useFetchBlogs;
