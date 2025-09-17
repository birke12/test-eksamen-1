import { useState, useEffect } from "react";

const useFetchBlogs = (url) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();

        if (Array.isArray(result.data)) {
          setBlogs(result.data);
        } else {
          setError("Kunne ikke hente blogs.");
        }
      } catch (err) {
        setError("Fejl ved hentning af blogs.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [url]);

  return { blogs, loading, error };
};

export default useFetchBlogs;
