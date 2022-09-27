import Styles from "./extra.module.scss";
import BookButton from "../bookComp/bookButton";
import darkImage from "../../assets/images/dark image 1.jpg";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import animateExtraSection from "../animations/extraSectionAnimation";
const ExtraSection = ({ lcpHasLoaded }: { lcpHasLoaded: boolean }) => {
  const container = useRef<any>(null);
  useEffect(() => {
    if (lcpHasLoaded) {
      setTimeout(() => {
        animateExtraSection(container.current);
      }, 5000);
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let image = entry.target as HTMLImageElement;
          image.src = image.dataset.src !== undefined ? image.dataset.src : "";
        }
      });
    });
    let imageContainer = container.current as HTMLDivElement;
    if (imageContainer !== null) {
      let image = imageContainer.querySelector("img") as HTMLImageElement;
      observer.observe(image);
    }
  }, [container.current, lcpHasLoaded]);
  return (
    <div className={Styles.container} ref={container}>
      <div className={Styles.content}>
        <p>
          we want you to relax and <br /> enjoy our <span>premium</span>{" "}
          services.
        </p>
        <img data-src={darkImage} alt="image of facials" />
      </div>
      <div className={Styles.sideMessageContainer}>
        <div className={Styles.sideMessage}>
          <p>
            we give you quality <br />
            assurance that you will <br />
            walk out of tiano <br /> <span>rejuvenated,</span>{" "}
            <span>recharged</span> <br /> and happy.
          </p>
          <Link to="book-appointment">
            <button>BOOK NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ExtraSection;
