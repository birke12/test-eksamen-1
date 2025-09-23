/* import { useState, useEffect } from "react";

const useFetchReviews = (url) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        if (result.status === "ok") setReviews(result.data);
        else setError("Kunne ikke hente anmeldelser.");
      } catch (err) {
        setError("Fejl ved hentning af anmeldelser.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [url]);

  return { reviews, loading, error };
};

export default useFetchReviews;
 */