import Styles from "./thirdSection.module.scss";
const ThirdSection = () => {
  return (
    <div className={Styles.container}>
      <p className={Styles.chapter}>chapter I</p>
      <div className={Styles.liTag}>
        <li></li>
      </div>
      <p className={Styles.paragraph}>
        tiano is a Nigerian-based brand <br />
        that is dedicated to pampering <br /> people that are wearied, we
        rejuvenate your <br /> body with upto date, industry tools <br />
        and practices.
      </p>
    </div>
  );
};
export default ThirdSection;
