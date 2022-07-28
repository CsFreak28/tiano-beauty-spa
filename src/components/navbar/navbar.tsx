import Styles from "./navbar.module.scss";
import { ReactComponent as LogoSvg } from "../../assets/svgs/logo.svg";
const Navbar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}>
        <p>tiano</p>
        <LogoSvg />
      </div>
      <div className={Styles.navLinks}>
        <ul>
            <li>home</li>
            <li>about us</li>
            <li>our services</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
