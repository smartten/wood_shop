import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import "./App.css";
import Flooring from "./component/Flooring/Flooring";
import FloorRaising from "./component/FloorRaising/FloorRaising";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CarpetFlooring from "./component/CarpetFlooring/CarpetFlooring";
import PVCFlooring from "./component/PVCFlooring/PVCFlooring";
import WoodFlooring from "./component/Wood/WoodFlooring";
import AllServices from "./component/AllService/AllServices";
import AboutUs from "./component/AboutUs/AboutUs";
import Blog from "./component/Blog/Blog";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flooring" element={<Flooring />} />
        <Route path="/floor-raising" element={<FloorRaising />} />
        <Route path="/carpet-flooring" element={<CarpetFlooring />} />
        <Route path="/pvc-flooring" element={<PVCFlooring />} />
        <Route path="/wood-flooring" element={<WoodFlooring />} />
        <Route path="/all-services" element={<AllServices />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
