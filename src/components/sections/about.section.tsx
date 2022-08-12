import Styles from "./aboutSection.module.scss";
import { ReactComponent as AboutUsLink } from "../../assets/svgs/aboutus.svg";
import { Link } from "react-router-dom";
const AboutUsSection = () => {
  return (
    <div className={Styles.aboutSectionContainer}>
      <div className={Styles.innerContainer}>
        <p>
          <span>Tiano Beauty Spa</span> is a brand new up-scale <br />
          day Spa focusing on providing high <br /> quality, full-service beauty
          care to the <br />
          surrounding community.
        </p>
        <div className={Styles.knowMore}>
          KNOW MORE ABOUT US{" "}
          <Link to="/aboutus">
            <AboutUsLink />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default AboutUsSection;
