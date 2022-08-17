import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/home/homepage";
import AboutPage from "./pages/about/aboutPage";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/App.scss";
import ScrollTrigger from "gsap/ScrollTrigger";
function App() {
  let mobileNavRef = useRef<any>(null);
  let hamburgerMenu = useRef<any>(null);
  // hamburgerMenu.current.style.backgroundColor = "blue";
  const [menuState, setMenuState] = useState<boolean>(false);
  function removeMobileNavBar() {
    if (hamburgerMenu.current !== null) {
      let arrayOfChildren: Array<HTMLElement> = [];
      for (let element of hamburgerMenu.current.children) {
        arrayOfChildren.push(element as HTMLElement);
      }
      let firstLine = arrayOfChildren[0];
      let middleLine = arrayOfChildren[1];
      let lastLine = arrayOfChildren[2];
      middleLine.style.opacity = "1";
      firstLine.style.transform = "rotate(0deg) translateY(0px)";
      lastLine.style.transform = "rotate(0deg) translateY(0px)";
      mobileNavRef.current.style.height = "0vh";
      document.body.style.overflowY = "scroll";
      setMenuState((oldState) => !oldState);
    }
  }
  return (
    <div className="App">
      <div className="background"></div>
      <div ref={mobileNavRef} className="mobileNav">
        <div className="innerContainer">
          <Link to="/">
            <div className="navElement" onClick={removeMobileNavBar}>
              sign up
            </div>
          </Link>{" "}
          <Link to="/">
            <div className="navElement" onClick={removeMobileNavBar}>
              sign in
            </div>  
          </Link>
          <Link to="/">
            {" "}
            <div className="navElement" onClick={removeMobileNavBar}>
              home
            </div>
          </Link>
          <Link to="/aboutus" onClick={removeMobileNavBar}>
            <div className="navElement">about us</div>
          </Link>
          <Link to="/">
            <div className="navElement" onClick={removeMobileNavBar}>
              our services
            </div>
          </Link>
        </div>
      </div>
      <Navbar
        mobileNav={mobileNavRef}
        random={hamburgerMenu}
        menuState={menuState}
      />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
