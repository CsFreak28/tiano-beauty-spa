import bgImg from "../../assets/images/aboutus.jpg";
import Styles from "./aboutPageHero.module.scss";
const AboutPageHero = () => {
  return (
    <div className={Styles.container}>
      {/* <img src={bgImg} alt="background image for about page" /> */}
      <span className={Styles.introText}>About Us</span>
    </div>
  );
};
export default AboutPageHero;

export const AbsoluteDivCover = () => {
  return <div className={Styles.relative}></div>;
};

