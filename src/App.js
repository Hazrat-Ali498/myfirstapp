import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";

import MenuBar from "./Components/MenuBar";
import Fronttpage from "./Components/Front";
import Services from "./Components/Services";
import Admin from "./Component2/AdminPage";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/About";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Kids from "./Components/Kids";
import Footer from "./Components/FooterPage";



function App() {
  const location = useLocation();
  const shownavbar = !location.pathname.includes("/AdminPage");

  return (
    <div style={{ backgroundColor: "white" }}>
      {shownavbar && <MenuBar />}

      {Footer}

      <Routes>
        <Route path="/" element={<Fronttpage />} />
        <Route path="/About" element={<About />} />
        <Route path="/For-Men" element={<Men />} />
        <Route path="/For-Women" element={<Women />} />
        <Route path="/For-Kids" element={<Kids />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AdminPage" element={<Admin />} />
      </Routes>
    </div>
    



  );
}

export default App;
