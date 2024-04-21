import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import pages
import HomePage from "./pages/HomePage.js";

function App() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <div className=" mx-auto container-snap">
        <Router>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
