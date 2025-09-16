import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/blog/Blog";
import FAQ from "./pages/faq/FAQ";
import Contact from "./pages/contact/Contact";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/faq", element: <FAQ /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return (
    <div className='"app'>
      <div className="content">{routes}</div>
    </div>
  );
}

export default App;
