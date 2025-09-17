import { useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import footerImg from "./assets/images/liquifer.png";
import BlogPage from "./pages/blogPage/BlogPage";
import FAQPage from "./pages/faq/FAQPage";
import ContactPage from "./pages/contactPage/ContactPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/blog", element: <BlogPage /> },
    { path: "/faq", element: <FAQPage /> },
    { path: "/contact", element: <ContactPage /> },
  ]);

  return (
    <div className='"app'>
      <Navigation />
      <div className="content">{routes}</div>
      <Footer footerImg={footerImg} />
    </div>
  );
}

export default App;
