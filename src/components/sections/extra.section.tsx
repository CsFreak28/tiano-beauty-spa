import Styles from "./extra.module.scss";
import BookButton from "../bookComp/bookButton";
import darkImage from "../../assets/images/dark image 1.jpg";
const ExtraSection = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <p>
          we want you to relax and <br /> enjoy our <span>premium</span>{" "}
          services.
        </p>
        <img src={darkImage} alt="image of facials" />
      </div>
      <div className={Styles.sideMessageContainer}>
        <div className={Styles.sideMessage}>
          <p>
            we give you quality <br />
            assurance that you will <br />
            walk out of tiano <br /> <span>rejuvenated,</span>{" "}
            <span>recharged</span> <br /> and happy.
          </p>
          <button>BOOK NOW</button>
          {/* <BookButton/> */}
        </div>
      </div>
    </div>
  );
};
export default ExtraSection;
