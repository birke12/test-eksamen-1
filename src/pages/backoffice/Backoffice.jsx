import { Link } from "react-router-dom";
/* import useAuth from "../hooks/useAuth"; */
import useFetch from "../../hooks/useFetch";
import { useState, useEffect } from "react";
import styles from "./backoffice.module.css";

const BackofficeBlogs = () => {
 /*  const { login, user, isAuthenticated } = useAuth(); */
  const { get, put, post, del, error, isLoading } = useFetch();
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Add Blog Form
  const [addFormData, setAddFormData] = useState({
    title: "",
    content: "",
    image: null,
    author: "",
  });

  // Edit Blog Form
  const [editFormData, setEditFormData] = useState({
    title: "",
    content: "",
    image: null,
    author: "",
  });

  // Fetch blogs on load
useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const blogsData = await get.blogs();
      setBlogs(blogsData.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  fetchBlogs();
}, []);


  // Add blog form handlers
  const handleAddInputChange = (e) => {
    const { name, value } = e.target;
    setAddFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddFileChange = (e) => {
    setAddFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleAddFormSubmit = async (e) => {
    e.preventDefault();

  const newBlog = {
    title: addFormData.title,
    teaser: "Short teaser here",
    description: addFormData.content, // map content to description
    image: "", // optional
  };


    try {
      await post.blogs(newBlog);
      alert("Blog added successfully!");

      const blogsData = await get.blogs();
      setBlogs(blogsData.data);

      setAddFormData({ title: "", content: "", image: null, author: "" });
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  // Edit blog form handlers
  const handleSelectChange = (e) => {
    const blogId = e.target.value;
    if (!blogId) {
      setSelectedBlog(null);
      setEditFormData({ title: "", content: "", image: null, author: "" });
      return;
    }
    const blog = blogs.find((b) => b._id === blogId);
    setSelectedBlog(blog);
    if (blog) {
      setEditFormData({
        title: blog.title,
        content: blog.content || "",
        image: null,
        author: blog.author || "",
      });
    }
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditFileChange = (e) => {
    setEditFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleEditFormSubmit = async (e) => {
    e.preventDefault();
    if (!selectedBlog) return;

    const updatedBlog = {
      title: editFormData.title,
      content: editFormData.content,
      author: editFormData.author,
    };

    try {
      await put.blogs(selectedBlog._id, updatedBlog);
      alert("Blog updated successfully!");

      const blogsData = await get.blogs();
      setBlogs(blogsData.data);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  // Delete blog
  const handleDeleteBlog = async (blogId) => {
    try {
      await del.blogs(blogId);
      alert("Blog deleted successfully!");

      const blogsData = await get.blogs();
      setBlogs(blogsData.data);
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  // Auth checks
/*   if (!isAuthenticated() || (user && user.role !== "admin")) {
    return (
      <div className={styles.backoffice}>
        <h1>Backoffice</h1>
        <p>You do not have permission to access this page.</p>
        <h2>Please log in</h2>
        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            login(email, password);
          }}
        >
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  } */

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.backoffice}>
      <section>
        <h1>Backoffice - Blogs</h1>
        <p>
          <Link to="/">Back to frontend</Link>
        </p>
      </section>

      {/* Blog list */}
      <section>
        <h2>Blogs</h2>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((blog) => (
                <tr key={blog._id} data-id={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>
                    <button onClick={() => handleDeleteBlog(blog._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>

      <div className={styles.forms}>
        {/* Add blog */}
        <section>
          <h2>Add new blog</h2>
          <form className={styles.form} onSubmit={handleAddFormSubmit}>
            <label htmlFor="addBlogTitle">Title:</label>
            <input
              type="text"
              id="addBlogTitle"
              name="title"
              value={addFormData.title}
              onChange={handleAddInputChange}
            />
            <label htmlFor="addBlogContent">Content:</label>
            <textarea
              id="addBlogContent"
              name="content"
              value={addFormData.content}
              onChange={handleAddInputChange}
            />
            <label htmlFor="addBlogAuthor">Author:</label>
            <input
              type="text"
              id="addBlogAuthor"
              name="author"
              value={addFormData.author}
              onChange={handleAddInputChange}
            />
            <label htmlFor="addBlogImage">Image:</label>
            <input
              type="file"
              id="addBlogImage"
              name="image"
              onChange={handleAddFileChange}
            />
            <button type="submit">Add</button>
          </form>
        </section>

        <div className={styles.divider}></div>

        {/* Edit blog */}
        <section>
          <h2>Edit blogs</h2>
          <select
            name="blogToEdit"
            id="blogToEdit"
            className={styles.select}
            onChange={handleSelectChange}
          >
            <option value="">Select a blog</option>
            {blogs &&
              blogs.map((blog) => (
                <option key={blog._id} value={blog._id}>
                  {blog.title}
                </option>
              ))}
          </select>

          <form className={styles.form} onSubmit={handleEditFormSubmit}>
            <label htmlFor="editBlogTitle">Title:</label>
            <input
              type="text"
              id="editBlogTitle"
              name="title"
              value={editFormData.title}
              onChange={handleEditInputChange}
            />
            <label htmlFor="editBlogContent">Content:</label>
            <textarea
              id="editBlogContent"
              name="content"
              value={editFormData.content}
              onChange={handleEditInputChange}
            />
            <label htmlFor="editBlogAuthor">Author:</label>
            <input
              type="text"
              id="editBlogAuthor"
              name="author"
              value={editFormData.author}
              onChange={handleEditInputChange}
            />
            <label htmlFor="editBlogImage">Image:</label>
            <input
              type="file"
              id="editBlogImage"
              name="image"
              onChange={handleEditFileChange}
            />
            <button type="submit">Edit</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default BackofficeBlogs;
