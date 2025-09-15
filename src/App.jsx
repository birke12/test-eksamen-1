import { useLocation, useRoutes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
/* import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Backoffice from "./pages/backoffice/Backoffice";
import ProtectedRoute from "./components/ProtectedRoute";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout"; */

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    /*  { path: "/shop", element: <Shop /> },
    { path: "/services", element: <Services /> },
    { path: "/om", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/checkout", element: <Checkout /> }, */
    /* Backoffice kan kun tilgås for brugere med admin-rolle */
    /*   {
      path: "/backoffice",
      element: (
        <ProtectedRoute requiredRole="admin">
          <Backoffice />
        </ProtectedRoute>
      ),
    }, */
  ]);

  return (
    <div className="app">
      <Navigation />
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
