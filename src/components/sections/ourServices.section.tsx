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

const OurServicesSection = () => {
  return (
    <div className={Styles.ourServicesSectionContainer}>
      <p className={Styles.title}>Our Services</p>
      <div className={`${Styles.servicesContainer} ${Styles.firstContainer}`}>
        <p className={Styles.serviceTitle}>Teeth Whitening</p>
        <p className={Styles.serviceDescription}>
          get your teeth whitened today <br />
          with our professional tools. <br />
        </p>
        <div className={Styles.imgsContainer}>
          <img src={TeethWhiteningImg} alt="body massage image" />
          <img src={TeethWhiteningImg2} alt="body massage image" />
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
          <img src={BodyMassageImg2} alt="body massage image" />
          <img src={BodyMassageImg1} alt="body massage image" />
        </div>
      </div>

      {/* //third service */}
      <div className={`${Styles.servicesContainer} ${Styles.thirdContainer}`}>
        <p className={Styles.serviceTitle}>Facials</p>
        <p className={Styles.serviceDescription}>
          We will improve the appearance <br />
          of your skin with industry <br />
          standard practices.
        </p>
        <div className={Styles.imgsContainer}>
          <img src={FacialsImg2} alt="facials image" />
          <img src={FacialsImg1} alt="facials image" />
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
          <img src={HairTreatmentImg2} alt="hair treatment image" />
          <img src={HairTreatmentImg1} alt="hair treatment image" />
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
          <img src={ButtEnlargementImg2} alt="hair treatment image" />
          <img src={ButtEnlargementImg1} alt="hair treatment image" />
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
          <img src={ManicureImg1} alt="manicure image" />
          <img src={ManicureImg2} alt="manicure image" />
        </div>
      </div>
    </div>
  );
};
export default OurServicesSection;
