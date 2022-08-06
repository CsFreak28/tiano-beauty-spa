import Styles from "./email.module.scss";
const EmailCollectionSection = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <p className={Styles.firstParagraph}>
          would you like to recieve <br /> health tips, discount info and news{" "}
          <br />
          on tiano beauty spa ?
        </p>
        <p className={Styles.secondParagraph}>
          give us your email for updates <br /> on discounts, events, etc
        </p>
      </div>
      <div className={Styles.inputs}>
        <input type="text" placeholder="email" />
        <button>SUBSCRIBE</button>
      </div>
    div
    </div>
  );
};
export default EmailCollectionSection;
