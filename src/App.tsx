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
import { SettingsPage } from "./pages/dashboard/dashboardComponents2";
import { FourOFourPage } from "./components/404Page";
import { AppointmentPopup } from "./components/popupBook/popupBook";
import {
  ProfileOverview,
  NotficationPage,
} from "./pages/dashboard/dashboardComponents";
export const ThemeContext = React.createContext(false);
function App() {
  let mobileNavRef = useRef<any>(null);
  let hamburgerMenu = useRef<any>(null);
  const [menuState, setMenuState] = useState<boolean>(false);
  const [showAppointmentPopup, setShowAppointmentPopup] =
    useState<boolean>(false);
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
  const [closeElements, setCloseElements] = useState<boolean>(false);
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
      {/* <div className="background"></div> */}
      <div>
        <button
          onClick={() => {
            setShowAppointmentPopup((prev) => !prev);
          }}
        >
          open appointment popup
        </button>
        {showAppointmentPopup && <AppointmentPopup />}
      </div>
      <ThemeContext.Provider value={closeElements}>
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
          <Route path="/auth/:typeOfAuth" element={<Authenticate />} />
          <Route element={<ProtectedRoutes />}>
            <Route element={<DashBoard />}>
              <Route
                path="/auth/dashboard/profile"
                element={<ProfileOverview />}
              />
              <Route
                path="/auth/dashboard/notifications"
                element={<NotficationPage />}
              />
              <Route
                path="/auth/dashboard/settings"
                element={<SettingsPage />}
              />
            </Route>
          </Route>
          <Route path="*" element={<FourOFourPage />}></Route>
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
