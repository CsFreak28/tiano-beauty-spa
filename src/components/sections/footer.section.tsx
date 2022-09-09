import Styles from "./footer.module.scss";
import { ReactComponent as InstagramLogo } from "../../assets/svgs/instagram icon.svg";
import { ReactComponent as FacebookLogo } from "../../assets/svgs/facebook icon.svg";
import { ReactComponent as TwitterLogo } from "../../assets/svgs/twitter icon.svg";

interface FooterProp {
  showSocialMediaLinks: boolean;
}
const FooterSection = (props: FooterProp) => {
  return (
    <div
      className={Styles.container}
    >
      {props.showSocialMediaLinks && (
        <div className={Styles.socialMedia}>
          <p>Follow us on social media</p>
          <div className={Styles.socialMediaLinks}>
            <div>
              <TwitterLogo />
            </div>
            <div>
              <FacebookLogo />
            </div>
            <div>
              <InstagramLogo />
            </div>
          </div>
        </div>
      )}
      <div className={Styles.contactUs}>
        <p
          className={Styles.brandName}
         
        >
          tiano beauty spa
        </p>
        <div className={Styles.contactUsFlex}>
          <div className={Styles.contactLink}>
            <p
              // style={
              //   props.showSocialMediaLinks
              //     ? {}
              //     : { position: "relative", top: "-30%" }
              // }
            >
              call us <br />
              +2348088663596
            </p>
          </div>
          <div className={Styles.contactLink}>
            <p
            >
              email us <br /> tianobeautyspa@gmail.com
            </p>
          </div>
        </div>
        <div className={Styles.copyright}>
          <div className={Styles.copyrightText}>COPYRIGHT &copy; 2022 TIANO BEAUTY SPA, ALL RIGHTS RESERVED</div>
          <div className={Styles.lastLinks}>
            <p>EMAIL</p>
            <p>INSTAGRAM</p>
            <p>TWITTER</p>
            <p>FACEBOOK</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FooterSection;
