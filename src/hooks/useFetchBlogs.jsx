/* import { useState } from "react";

const useFetchBlogs = () => {
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = {
    "Content-Type": "application/json",
  };

 
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


  const getBlogs = async () => {
    const blogs = await request("http://localhost:3042/blogs");
    setData(blogs);
    return blogs;
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
 */