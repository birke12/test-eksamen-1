// useFetch.js
import { useState } from "react";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const headers = {
    "Content-Type": "application/json",
  };

  const handleRequest = async (url, options = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, { headers, ...options });
      if (!response.ok) {
        throw new Error(`Failed to ${options.method || "fetch"} resource`);
      }
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ GET
  const get = {
    users: () => handleRequest(`http://localhost:3042/users`),
    user: (id) =>
      id
        ? handleRequest(`http://localhost:3042/user/${id}`)
        : setError("No id provided"),

    messages: () => handleRequest(`http://localhost:3042/messages`),
    message: (id) =>
      id
        ? handleRequest(`http://localhost:3042/message/${id}`)
        : setError("No id provided"),

    faqs: () => handleRequest(`http://localhost:3042/faqs`),
    faq: (id) =>
      id
        ? handleRequest(`http://localhost:3042/faq/${id}`)
        : setError("No id provided"),

    reviews: () => handleRequest(`http://localhost:3042/reviews`),
    review: (id) =>
      id
        ? handleRequest(`http://localhost:3042/review/${id}`)
        : setError("No id provided"),

    subscribers: () => handleRequest(`http://localhost:3042/subscribers`),
    subscriber: (id) =>
      id
        ? handleRequest(`http://localhost:3042/subscriber/${id}`)
        : setError("No id provided"),

    blogs: () => handleRequest(`http://localhost:3042/blogs`),
    blog: (id) =>
      id
        ? handleRequest(`http://localhost:3042/blog/${id}`)
        : setError("No id provided"),
  };

  // ✅ POST
  const post = {
    users: (user) =>
      handleRequest(`http://localhost:3042/users`, {
        method: "POST",
        body: JSON.stringify(user),
      }),
    messages: (message) =>
      handleRequest(`http://localhost:3042/messages`, {
        method: "POST",
        body: JSON.stringify(message),
      }),
    faqs: (faq) =>
      handleRequest(`http://localhost:3042/faqs`, {
        method: "POST",
        body: JSON.stringify(faq),
      }),
    reviews: (review) =>
      handleRequest(`http://localhost:3042/reviews`, {
        method: "POST",
        body: JSON.stringify(review),
      }),
    subscribers: (subscriber) =>
      handleRequest(`http://localhost:3042/subscribers`, {
        method: "POST",
        body: JSON.stringify(subscriber),
      }),
    blogs: (blog) =>
      handleRequest(`http://localhost:3042/blog`, {
        method: "POST",
        body: JSON.stringify(blog),
      }),
  };

  // ✅ PUT
  const put = {
    users: (id, user) =>
      id
        ? handleRequest(`http://localhost:3042/user/${id}`, {
            method: "PUT",
            body: JSON.stringify(user),
          })
        : setError("No id provided"),
    messages: (id, message) =>
      id
        ? handleRequest(`http://localhost:3042/message/${id}`, {
            method: "PUT",
            body: JSON.stringify(message),
          })
        : setError("No id provided"),
    faqs: (id, faq) =>
      id
        ? handleRequest(`http://localhost:3042/faq/${id}`, {
            method: "PUT",
            body: JSON.stringify(faq),
          })
        : setError("No id provided"),
    reviews: (id, review) =>
      id
        ? handleRequest(`http://localhost:3042/review/${id}`, {
            method: "PUT",
            body: JSON.stringify(review),
          })
        : setError("No id provided"),
    subscribers: (id, subscriber) =>
      id
        ? handleRequest(`http://localhost:3042/subscriber/${id}`, {
            method: "PUT",
            body: JSON.stringify(subscriber),
          })
        : setError("No id provided"),
    blogs: (id, blog) =>
      id
        ? handleRequest(`http://localhost:3042/blog/${id}`, {
            method: "PUT",
            body: JSON.stringify(blog),
          })
        : setError("No id provided"),
  };

  // ✅ DELETE
  const del = {
    users: (id) =>
      id
        ? handleRequest(`http://localhost:3042/user/${id}`, {
            method: "DELETE",
          })
        : setError("No id provided"),
    messages: (id) =>
      id
        ? handleRequest(`http://localhost:3042/message/${id}`, {
            method: "DELETE",
          })
        : setError("No id provided"),
    faqs: (id) =>
      id
        ? handleRequest(`http://localhost:3042/faq/${id}`, {
            method: "DELETE",
          })
        : setError("No id provided"),
    reviews: (id) =>
      id
        ? handleRequest(`http://localhost:3042/review/${id}`, {
            method: "DELETE",
          })
        : setError("No id provided"),
    subscribers: (id) =>
      id
        ? handleRequest(`http://localhost:3042/subscriber/${id}`, {
            method: "DELETE",
          })
        : setError("No id provided"),
    blogs: (id) =>
      id
        ? handleRequest(`http://localhost:3042/blog/${id}`, {
            method: "DELETE",
          })
        : setError("No id provided"),
  };

  return {
    get,
    post,
    put,
    del,
    data,
    error,
    isLoading,
  };
};

export default useFetch;
