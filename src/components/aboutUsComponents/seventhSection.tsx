import Styles from "./seventhSection.module.scss";
import FooterSection from "../sections/footer.section";
const SeventhSection = () => {
  return (
    <div className={Styles.container}>
      <p className={Styles.chapter}>chapter iv</p>
      <div className={Styles.liTag}>
        <li></li>
      </div>
      <p className={Styles.meetTheTeam}>
        Meet <br />
        The Team
      </p>
      <div className={Styles.founders}>
        <div className={Styles.founderProfile}>
          <div
            className={`${Styles.founderImage} ${Styles.firstFounder}`}
          ></div>
          <p className={Styles.founderName}>
            Samuel Oliver <br /> Wesley
          </p>
          <p className={Styles.founderDescription}>
            AFTER MANY YEARS OF WORKING AS A FREELANCE <br /> PHYSIO-THERAPIST
            SAMUEL FINALLY DECIDED TO <br />
            START HIS OWN BEAUTY SPA BRAND, <br />
            HE HAS NOW EXPANDED IT FROM JUST NIGERIA <br /> TO OVER 4 AFRICAN
            COUNTRIES.
          </p>
        </div>
        <div className={Styles.founderProfile}>
          <div
            className={`${Styles.founderImage} ${Styles.secondFounder}`}
          ></div>
          <p className={Styles.founderName}>
            Chioma <br />
            Onyekachi
          </p>
          <p className={Styles.founderDescription}>
            CHIOMA IS A NIGERIAN DERMATOLOGIST,
            <br />
            SHE IS VERY PASSIONATE ABOUT MAKING SURE THAT THE PEOPLE <br />
            WHO COME TO HER FOR SKINCARE HELP GET THE MOST <br /> OUT OF HER
            COUNSEL, SHE PARTNERED WITH SAMUEL OLIVER, <br />
            TO BECOME THE MANAGING DIRECTOR FOR <span>tiano</span> IN NIGERIA.
          </p>
        </div>
      </div>
      <FooterSection showSocialMediaLinks={false} />
    </div>
  );
};
export default SeventhSection;
