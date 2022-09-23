import Styles from "./hero.module.scss";
import HeroImg from "../../assets/images/heroImg.png";
import BookComp from "../bookComp/bookComp";
import BookButton from "../bookComp/bookButton";
import { useEffect, useRef } from "react";
import { NotNowButton } from "../bookComp/bookButton";
const HeroSection = ({
  setLcpHasLoaded,
}: {
  setLcpHasLoaded: React.Dispatch<boolean>;
}) => {
  let imageRef = useRef<any>(null);
  useEffect(() => {
    let image = imageRef.current as HTMLImageElement;
    if (image) {
      setLcpHasLoaded(true);
    }
  }, [imageRef]);
  return (
    <div className={Styles.heroContainer}>
      <div className={Styles.split}>
        <div className={Styles.copyText}>
          <p>
            <span>r</span>
            <span>e</span>
            <span>l</span>
            <span>a</span>
            <span>x</span>
            <span>,</span>
            <span className={Styles.whitespace}></span>
            <span>r</span>
            <span>e</span>
            <span>j</span>
            <span>u</span>
            <span>v</span>
            <span>e</span>
            <span>n</span>
            <span>a</span>
            <span>t</span>
            <span>e</span>
            <span>,</span>
            <br />
            <span>r</span>
            <span>e</span>
            <span>f</span>
            <span>r</span>
            <span>e</span>
            <span>s</span>
            <span>h</span>
            <span className={Styles.whitespace}></span>
            <span className={Styles.whitespace}></span>
            <span className={Styles.whitespace}></span>
            <span>a</span>
            <span>n</span>
            <span>d</span>
            <br />
            <span>m</span>
            <span>o</span>
            <span>s</span>
            <span>t</span>
            <span className={Styles.whitespace}></span>
            <span>e</span>
            <span>s</span>
            <span>p</span>
            <span>e</span>
            <span>c</span>
            <span>i</span>
            <span>a</span>
            <span>l</span>
            <span>ly</span>
            <br />
            <span>enj</span>
            <span>o</span>
            <span>y</span>
            <span className={Styles.whitespace}></span>
            <span>you</span>
            <span>r</span>
            <span>s</span>
            <span>e</span>
            <span>l</span>
            <span>f</span>
            <span>...</span>
          </p>
          <div className={Styles.bookButtonContainer}>
            <NotNowButton Styles={Styles} />
            <BookButton Styles={Styles} text="BOOK NOW" bookStraight={false} />
          </div>
        </div>
        <div className={Styles.imgHolder}>
          <img src={HeroImg} alt="" className={Styles.heroImg} ref={imageRef} />
          <img src={HeroImg} alt="" className={Styles.secondHeroImg} />
        </div>
        <BookComp />
      </div>
    </div>
  );
};
export default HeroSection;
