import React from "react";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/home/homepage";
import AboutPage from "./pages/about/aboutPage";
import { Route, Routes } from "react-router-dom";
import "./styles/App.scss";
function App() {
  return (
    <div className="App">
      <div className="background"></div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/aboutus' element={<AboutPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
