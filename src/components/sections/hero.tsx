import Styles from "./hero.module.scss";
import HeroImg from "../../assets/images/heroImg.png";
import BookComp from "../bookComp/bookComp";
import BookButton from "../bookComp/bookButton";
import { useEffect, useRef } from "react";
import { NotNowButton } from "../bookComp/bookButton";
import animateHeroSection from "../animations/heroSectionAnimation";
const HeroSection = ({
  setLcpHasLoaded,
  lcpHasLoaded,
}: {
  setLcpHasLoaded: React.Dispatch<boolean>;
  lcpHasLoaded: boolean;
}) => {
  let imageRef = useRef<any>(null);
  let secondImgRef = useRef<any>(null);
  let secondImgHiderRef = useRef<any>(null);
  let firstImgHiderRef = useRef<any>(null);
  useEffect(() => {
    let image = imageRef.current as HTMLImageElement;
    if (image) {
      setLcpHasLoaded(true);
    }
    if (lcpHasLoaded) {
      console.log("the lcp has loaded");
      let firstImgHider = firstImgHiderRef.current as HTMLDivElement;
      let secondImgHider = secondImgHiderRef.current as HTMLDivElement;
      let firstImage = imageRef.current as HTMLImageElement;
      let secondImage = secondImgRef.current as HTMLImageElement;
      setTimeout(() => {
        animateHeroSection([firstImage, secondImage]);
      }, 2500);
    }
  }, [imageRef, lcpHasLoaded]);
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
          <div
            className={Styles.topImageContainer}
            ref={firstImgHiderRef}
          ></div>
          <img
            src={HeroImg}
            alt=""
            className={Styles.secondHeroImg}
            ref={secondImgRef}
          />
          <div
            className={Styles.underImageContainer}
            ref={secondImgHiderRef}
          ></div>
        </div>
        <BookComp />
      </div>
    </div>
  );
};
export default HeroSection;
