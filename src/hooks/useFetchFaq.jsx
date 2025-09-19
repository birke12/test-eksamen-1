import { useState, useEffect } from "react";

const useFetchFaq = (url) => {
  const [faq, setFaq] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const res = await fetch(url);
        const result = await res.json();
        if (result.status === "ok") setFaq(result.data);
        else setError("Kunne ikke hente faq.");
      } catch (err) {
        setError("Fejl ved hentning af faq.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaq();
  }, [url]);

  return { faq, loading, error };
};

export default useFetchFaq;
