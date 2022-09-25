import Styles from "./ourServices.module.scss";
import TeethWhiteningImg from "../../assets/images/teeth-whitening.png";
import TeethWhiteningImg2 from "../../assets/images/teeth-whitening2.png";
import BodyMassageImg1 from "../../assets/images/bodyMassage1.png";
import BodyMassageImg2 from "../../assets/images/bodyMassage2.png";
import FacialsImg1 from "../../assets/images/facials1.png";
import FacialsImg2 from "../../assets/images/facials2.png";
import HairTreatmentImg1 from "../../assets/images/hairTreatment1.png";
import HairTreatmentImg2 from "../../assets/images/hairTreatment2.png";
import ButtEnlargementImg1 from "../../assets/images/buttEnlargement.png";
import ButtEnlargementImg2 from "../../assets/images/buttEnlargement2.png";
import ManicureImg1 from "../../assets/images/manicure1.png";
import ManicureImg2 from "../../assets/images/manicure2.png";
import { useEffect, useRef } from "react";
import animateOurServicesSection from "../animations/ourServicesAnimation";
import { bounceImages } from "../animations/ourServicesAnimation";
const OurServicesSection = ({ lcpHasLoaded }: { lcpHasLoaded: boolean }) => {
  const container = useRef<any>(null);
  useEffect(() => {
    if (lcpHasLoaded) {
      setTimeout(() => {
        animateOurServicesSection(container.current);
        let images = [...container.current.querySelectorAll("img")];
        bounceImages(images);
      }, 3000);
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target as HTMLDivElement;
          let children = [
            ...lazyImage.querySelectorAll(".ourServices_imgsContainer__-EUfM"),
          ];
          children.forEach((child) => {
            let images = child.querySelectorAll("img");
            images.forEach((img) => {
              img.src = img.dataset.src !== undefined ? img.dataset.src : "";
            });
          });
          observer.unobserve(lazyImage);
        }
      });
    });
    if (container.current !== null) {
      let classNameOfServiceImgContainer =
        ".ourServices_servicesContainer__xqwLA";
      let servicesContainer = container.current as HTMLDivElement;
      let ArrayOfChildren = [
        ...servicesContainer.querySelectorAll(classNameOfServiceImgContainer),
      ];
      ArrayOfChildren.forEach((service) => {
        observer.observe(service);
      });
    }
  }, [lcpHasLoaded]);

  return (
    <div className={Styles.ourServicesSectionContainer} ref={container}>
      <p className={Styles.title}>Our Services</p>
      <div className={`${Styles.servicesContainer} ${Styles.thirdContainer}`}>
        <p className={Styles.serviceTitle}>Teeth Whitening</p>
        <p className={Styles.serviceDescription}>
          get your teeth whitened today <br />
          with our professional tools. <br />
        </p>
        <div className={Styles.imgsContainer}>
          <img
            data-src={TeethWhiteningImg}
            alt="body massage image"
            data-speed='0'
          />
          <img
            data-src={TeethWhiteningImg2}
            className={Styles.firstImg}
            alt="body massage image"
            data-speed="0"
          />
        </div>
      </div>

      {/* //second service */}
      <div className={`${Styles.servicesContainer} ${Styles.secondContainer}`}>
        <p className={Styles.serviceTitle}>Body Massage</p>
        <p className={Styles.serviceDescription}>
          relax and recieve stress relieving <br />
          massages from our top-notch <br />
          masseuses.
        </p>
        <div className={Styles.imgsContainer}>
          <img data-src={BodyMassageImg2} alt="body massage image" data-speed="2"/>
          <img data-src={BodyMassageImg1} alt="body massage image" data-speed="2"/>
        </div>
      </div>

      {/* //third service */}
      <div className={`${Styles.servicesContainer} ${Styles.firstContainer}`}>
        <p className={Styles.serviceTitle}>Facials</p>
        <p className={Styles.serviceDescription}>
          We will improve the appearance <br />
          of your skin with industry <br />
          standard practices.
        </p>

        <div className={Styles.imgsContainer}>
          <img data-src={FacialsImg2} alt="facials image" loading="lazy" data-speed="1"/>
          <img data-src={FacialsImg1} alt="facials image" loading="lazy" data-speed="1"/>
        </div>
      </div>

      {/* fourth service */}
      <div className={`${Styles.servicesContainer} ${Styles.fourthContainer}`}>
        <p className={Styles.serviceTitle}>Hair Treatment</p>
        <p className={Styles.serviceDescription}>
          A woman's hair is definitely her <br />
          pride, our job is to make it look <br />
          good.
        </p>
        <div className={Styles.imgsContainer}>
          <img
            data-src={HairTreatmentImg2}
            alt="hair treatment image"
            loading="lazy"
            data-speed="1"
          />
          <img
            data-src={HairTreatmentImg1}
            alt="hair treatment image"
            loading="lazy"
            data-speed="1"
          />
        </div>
      </div>

      {/* fifth service */}
      <div className={`${Styles.servicesContainer} ${Styles.fifthContainer}`}>
        <p className={Styles.serviceTitle}>Butt Enlargement</p>
        <p className={Styles.serviceDescription}>
          A woman's hair is definitely her <br />
          pride, our job is to make it look <br />
          good.
        </p>
        <div className={Styles.imgsContainer}>
          <img
            data-src={ButtEnlargementImg2}
            alt="hair treatment image"
            loading="lazy"
            data-speed="3"
          />
          <img
            data-src={ButtEnlargementImg1}
            alt="hair treatment image"
            loading="lazy"
            data-speed="3"
          />
        </div>
      </div>

      {/* sixth service */}
      <div className={`${Styles.servicesContainer} ${Styles.sixthContainer}`}>
        <p className={Styles.serviceTitle}>Manicure</p>
        <p className={Styles.serviceDescription}>
          we will improve the appearance of your skin and nails with industry
          standard practices.
        </p>
        <div className={Styles.imgsContainer}>
          <img data-src={ManicureImg1} alt="manicure image" loading="lazy" data-speed="0"/>
          <img data-src={ManicureImg2} alt="manicure image" loading="lazy" data-speed="0"/>
        </div>
      </div>
    </div>
  );
};
export default OurServicesSection;
