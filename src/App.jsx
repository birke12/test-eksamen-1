import { useLocation, useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import BlogPages from "./pages/BlogPages";
import BlogDetails from "./components/blogDetails/BlogDetails";
import BackofficeBlogs from "./pages/backoffice/Backoffice";
import Faq from "./pages/FaqPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/blogPages", element: <BlogPages /> },
    { path: "/blogs/:id", element: <BlogDetails /> },
    { path: "/backoffice", element: <BackofficeBlogs /> },
    { path: "/faq", element: <Faq /> },
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
