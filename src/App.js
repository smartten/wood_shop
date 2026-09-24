import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ServicePage from "./component/Service/ServicePage";
import AllServices from "./component/AllService/AllServices";
import AboutUs from "./component/AboutUs/AboutUs";
import Blog from "./component/Blog/Blog";
import BlogPost from "./component/BlogPost/BlogPost";
import ContactUs from "./component/ContactUs/ContactUs";
import { SiteProvider } from "./context/SiteContext";

function App() {
  return (
    <SiteProvider>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-services" element={<AllServices />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* Every service in the CMS is served at /<slug>; unknown slugs go home. */}
          <Route path="/:slug" element={<ServicePage />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </SiteProvider>
  );
}

export default App;
