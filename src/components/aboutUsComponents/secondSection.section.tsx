import Styles from "./secondSection.module.scss";
const SecondSection = () => {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.shortText} ${Styles.topText}`}>
        TIANO BEAUTY SPA IS A BRAND DESIGNED <br /> TO HELP PEOPLE IN NEED OF
        REJUVENATION AND REFRESHMENT <br /> AFTER A LONG PERIOD OF STRESS.
      </div>
      <p>
        Caretakers of the weary, we provide a <br /> real escape and a chance
        to recharge in <br /> the convenience of <span>tiano.</span> take a{" "}
        <br />
        peaceful break with us.
      </p>
      <div className={`${Styles.shortText} ${Styles.bottomText}`}>
        SCROLL DOWN TO LEARN MORE ABOUT <br /> OUR MISSION AND TEAM.
      </div>
    </div>
  );
};
export default SecondSection;
