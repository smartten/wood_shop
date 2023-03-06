import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import "./App.css";
// import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
