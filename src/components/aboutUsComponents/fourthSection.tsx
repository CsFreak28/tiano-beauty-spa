import Styles from "./fourthSection.module.scss";
const FourthSection = () => {
  return (
    <div className={Styles.container}>
      <li></li>
      <div className={Styles.displayImgContainer}>
        <div className={`${Styles.displayimg} ${Styles.img1}`}></div>
        <div className={`${Styles.displayimg} ${Styles.img2}`}></div>
        <div className={`${Styles.displayimg} ${Styles.img3}`}></div>
        <div className={`${Styles.displayimg} ${Styles.img4}`}></div>
        <div className={`${Styles.displayimg} ${Styles.img5}`}></div>
      </div>
      <div className={Styles.displayImgContainer}>
        <div className={`${Styles.displayimg} ${Styles.img6}`}></div>
        <div className={`${Styles.displayimg} ${Styles.img7}`}></div>
        <div className={`${Styles.displayimg} ${Styles.img8}`}></div>
      </div>
      <div className={Styles.displayImgContainer}>
        <div className={`${Styles.displayimg} ${Styles.img9}`}></div>
      </div>
      <p className={Styles.shortParagraph}>
        WE WORK ENDLESSLY TO PERFECT OUR SERVICES FOR <br /> THE PERFECT CLIENT,
        A CLIENT THAT IS FATIGUED FROM A <br /> LOT OF STRESS AND NEEDS THAT
        RELAXING AND <br /> REJUVENATING EXPERIENCE.
      </p>
      <p className={Styles.secondParagraph}>
        We value the Quality of our <br /> service over the speed, both in{" "}
        <br /> our consultation and in our learning <br />
        process.
      </p>
    </div>
  );
};
export default FourthSection;
