import Styles from "./fifthSection.module.scss";
const FifthSection = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.chapter}> chapter II</div>{" "}
      <div className={Styles.liTag}>
        <li></li>
      </div>
      <p className={Styles.expertise}>
        our <br />
        expertise
      </p>
      <div className={Styles.servicesContainer}>
        <p className={Styles.teethWhitening}>teeth whitening</p>
        <p className={Styles.right}>facials</p>
        <p className={Styles.bodyMassage}>body massage</p>
        <p className={Styles.right}>hair treatment</p>
        <p className={Styles.manicure}>manicure</p>
        <p className={Styles.buttEnlarge}>butt enlargement</p>
      </div>
      <div className={Styles.flexImages}>
        <div className={Styles.firstFlexImage}></div>
        <div className={Styles.secondFlexImage}></div>
      </div>
      <p className={Styles.firstParagraph}>
        our team is multi-disciplinary with a diversity of professional
        experiences, <br />
        specialized in the field of body rejuvenation.
      </p>
      <p className={Styles.secondParagraph}>
        Because of our innate eye for composition, beauty and stress points,{" "}
        <br />
        all our services have a tactility, warmth and distinct feel, we create{" "}
        <br />
        communication and experiences that frame the stories of our clients.{" "}
        <br />
        in whatever way people interact with our brand <br />
        we make sure the experience is long-lasting.
      </p>
    </div>
  );
};
export default FifthSection;
