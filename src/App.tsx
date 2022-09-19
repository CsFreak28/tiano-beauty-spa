import React, { lazy, useEffect, useState, Suspense } from "react";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/home/homepage";
import { Route, Routes } from "react-router-dom";
import { useRef } from "react";
import { Link } from "react-router-dom";
import "./styles/App.scss";
import { FourOFourPage } from "./components/404Page";
const AboutPage = lazy(() => import("./pages/about/aboutPage"));
const DashBoard = lazy(() => import("./pages/dashboard/dashboard"));
const Authenticate = lazy(() => import("./pages/auth/authenticate"));
const SettingsPage = lazy(() => import("./pages/dashboard/settings"));
const ProfileOverview = lazy(() => import("./pages/dashboard/profileOverview"));
const NotficationPage = lazy(() => import("./pages/dashboard/notification"));
const ProtectedRoutes = lazy(() => import("./pages/auth/protectedRoutes"));
const AppointmentPopup = lazy(() => import("./components/popupBook/popupBook"));
function App() {
  let mobileNavRef = useRef<any>(null);
  let hamburgerMenu = useRef<any>(null);
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
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/aboutus"
            element={
              <Suspense fallback={<div>loading..</div>}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route path="/auth/:typeOfAuth" element={<Authenticate />} />
          <Route path="book-appointment" element={<AppointmentPopup />} />
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
      </Suspense>
    </div>
  );
}

export default App;
