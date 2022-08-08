import Styles from "./navbar.module.scss";
import { ReactComponent as LogoSvg } from "../../assets/svgs/logo.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.authLinks}>
        <p>sign up</p>
        <p>sign in</p>
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
          <li>our services</li>
        </ul>
      </div>
      <div className={Styles.hamburgerMenu}>
        <div className={Styles.firstLine}></div>
        <div className={Styles.middleLine}></div>
        <div className={Styles.thirdLine}></div>
      </div>
    </div>
  );
};

export default Navbar;
