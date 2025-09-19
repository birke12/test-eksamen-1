import React, { useEffect, useState } from "react";
import useFetchBlogs from "../../hooks/useFetchBlogs";
import "./backoffice.module.css";

const BackofficeBlogs = () => {
  const {
    data: blogs,
    getBlogs,
    addBlog,
    updateBlog,
    deleteBlog,
    isLoading,
    error,
  } = useFetchBlogs();

  const [newBlog, setNewBlog] = useState({
    title: "",
    image: "",
    teaser: "",
    description: "",
  });
  const [editBlog, setEditBlog] = useState(null);

  useEffect(() => {
    getBlogs();
  }, []);

  const handleChange = (e, isEdit = false) => {
    const { name, value } = e.target;
    if (isEdit) setEditBlog((prev) => ({ ...prev, [name]: value }));
    else setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBlog = async () => {
    if (!newBlog.title) return alert("Title is required");
    await addBlog(newBlog);
    setNewBlog({ title: "", image: "", teaser: "", description: "" });
  };

  const handleUpdateBlog = async () => {
    if (!editBlog) return;
    await updateBlog(editBlog);
    setEditBlog(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      await deleteBlog(id);
    }
  };

  return (
    <div className="backoffice-wrapper">
      <h1>Backoffice</h1>
      <a href="/">Back to frontend</a>

      {isLoading && <p>Loading blogs...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* BLOG LIST */}
      <section>
        <h2>Blogs</h2>
        <table className="blog-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Teaser</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(blogs) && blogs.length > 0 ? (
              blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>
                    <img src={blog.image} alt={blog.title} width="80" />
                  </td>
                  <td>{blog.teaser}</td>
                  <td>{blog.description.substring(0, 50)}...</td>
                  <td>
                    <button onClick={() => setEditBlog(blog)}>Update</button>
                    <button onClick={() => handleDelete(blog._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No blogs found</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* ADD BLOG */}
      <section>
        <h2>Add blog</h2>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={newBlog.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newBlog.image}
          onChange={handleChange}
        />
        <input
          type="text"
          name="teaser"
          placeholder="Enter teaser"
          value={newBlog.teaser}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Enter description"
          value={newBlog.description}
          onChange={handleChange}
        />
        <button onClick={handleAddBlog}>Add new blog</button>
      </section>

      {/* UPDATE BLOG */}
      {editBlog && (
        <section>
          <h2>Update blog</h2>
          <input
            type="text"
            name="title"
            value={editBlog.title}
            onChange={(e) => handleChange(e, true)}
          />
          <input
            type="text"
            name="image"
            value={editBlog.image}
            onChange={(e) => handleChange(e, true)}
          />
          <input
            type="text"
            name="teaser"
            value={editBlog.teaser}
            onChange={(e) => handleChange(e, true)}
          />
          <textarea
            name="description"
            value={editBlog.description}
            onChange={(e) => handleChange(e, true)}
          />
          <button onClick={handleUpdateBlog}>Update blog</button>
          <button onClick={() => setEditBlog(null)}>Cancel</button>
        </section>
      )}
    </div>
  );
};

export default BackofficeBlogs;
