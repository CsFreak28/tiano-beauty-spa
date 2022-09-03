import Styles from "./navbar.module.scss";
import { ReactComponent as LogoSvg } from "../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";
import { auth } from "../../pages/auth/auth";
const Navbar = ({
  mobileNav,
  random,
  menuState,
}: {
  mobileNav: { current: HTMLElement };
  random: { current: HTMLDivElement };
  menuState: boolean;
}) => {
  let hamburgerMenu = random;
  let menuIsOpened: boolean = false;
  function toggleHamburgerMenu(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void {
    if (hamburgerMenu.current !== null) {
      let arrayOfChildren: Array<HTMLElement> = [];
      for (let element of hamburgerMenu.current.children) {
        arrayOfChildren.push(element as HTMLElement);
      }
      let firstLine = arrayOfChildren[0];
      let middleLine = arrayOfChildren[1];
      let lastLine = arrayOfChildren[2];
      if (menuIsOpened === false) {
        // animate the first and last line(the entire menu bar)
        middleLine.style.opacity = "0";
        firstLine.style.transform = "rotate(45deg) translateY(15px)";
        lastLine.style.transform = "rotate(-45deg) translateY(-15px)";
        mobileNav.current.style.clipPath = "circle(82.8% at 57% 41%)";
        menuIsOpened = true;
        document.body.style.overflow = "hidden";
      } else {
        middleLine.style.opacity = "1";
        firstLine.style.transform = "rotate(0deg) translateY(0px)";
        lastLine.style.transform = "rotate(0deg) translateY(0px)";
        mobileNav.current.style.clipPath = "circle(0.0% at 97% 4%)";
        menuIsOpened = false;
        document.body.style.overflowY = "scroll";
      }
    }
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.authLinks}>
        <Link to="/auth/signUp">
          <p>sign up</p>
        </Link>
        <Link to="/auth/signIn">
          <p>sign in</p>
        </Link>
      </div>
      <div className={Styles.logo}>
        <p>tiano</p>
        <LogoSvg />
      </div>
      <div className={Styles.navLinks}>
        <ul>
          <Link to="/">
            <li>home</li>
          </Link>
          <Link to={"/aboutus"}>
            <li>about us</li>
          </Link>
        </ul>
      </div>
      <div
        className={Styles.hamburgerMenu}
        onClick={toggleHamburgerMenu}
        ref={hamburgerMenu}
      >
        <div className={Styles.firstLine}></div>
        <div className={Styles.middleLine}></div>
        <div className={Styles.thirdLine}></div>
      </div>
    </div>
  );
};

export default Navbar;
