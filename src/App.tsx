import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/home/homepage";
import AboutPage from "./pages/about/aboutPage";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/App.scss";
import Authenticate from "./pages/auth/authenticate";
import DashBoard from "./pages/dashboard/dashboard";
import ProtectedRoutes from "./pages/auth/protectedRoutes";
import { ProfileOverview } from "./pages/dashboard/dashboardComponents";
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
      mobileNavRef.current.style.clipPath = "circle(0.0% at 97% 4%)";
      document.body.style.overflowY = "scroll";
      setMenuState((oldState) => !oldState);
    }
  }
  const [userIsLoggedIn, setUserIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (visualViewport !== null) {
      visualViewport.addEventListener("resize", (e) => {
        if (visualViewport && visualViewport.width > 700) {
          document.body.style.overflowY = "scroll";
        }
      });
    }
  }, []);
  return (
    <div className="App">
      <div className="background"></div>
      <div ref={mobileNavRef} className="mobileNav">
        <div className="innerContainer">
          <Link to="/auth/signUp">
            <div className="navElement" onClick={removeMobileNavBar}>
              sign up
            </div>
          </Link>{" "}
          <Link to="/auth/signIn">
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
        <Route
          path="/auth/:typeOfAuth"
          element={<Authenticate />}
        />
        <Route element={<ProtectedRoutes />}>
          <Route element={<DashBoard />}>
            <Route
              path="/auth/dashboard/profile"
              element={<ProfileOverview />}
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={(() => {
            return <div style={{ fontSize: "50px" }}>page not found</div>;
          })()}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
