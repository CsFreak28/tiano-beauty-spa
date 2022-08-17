import bgImg from "../../assets/images/aboutus.jpg";
import Styles from "./aboutPageHero.module.scss";
const AboutPageHero = () => {
  return (
    <div className={Styles.container}>
      {/* <img src={bgImg} alt="background image for about page" /> */}
      <p className={Styles.introText}>About Us</p>
    </div>
  );
};
export default AboutPageHero;
