import Styles from "./dashboardComponents.module.scss";
import BookButton from "../../components/bookComp/bookButton";
import { ReactComponent as OptionsIcon } from "../../assets/svgs/optionsicon.svg";
import { ReactComponent as NextApptIcon } from "../../assets/svgs/nextappticon.svg";
import { ReactComponent as LastApptIcon } from "../../assets/svgs/lastappticon.svg";
import { ReactComponent as LastSessionIcon } from "../../assets/svgs/lastsessionicon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svgs/settingsIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svgs/profileIcon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svgs/notificationIcon.svg";
import { ReactComponent as ExitIcon } from "../../assets/svgs/exitIcon.svg";
import { ReactComponent as WRefIcon } from "../../assets/svgs/wRefIcon.svg";
import { ReactComponent as WoutRefIcon } from "../../assets/svgs/woutRefIcon.svg";
import { useOutletContext } from "react-router-dom";
export const ProfileOverview = () => {
  return (
    <div className={Styles.profileOverViewContainer}>
      <div className={Styles.featuresFlexContainer}>
        <FeatureComp
          heading="August 1st 2022"
          subHeading="Your next"
          underHeading="appointment"
          icon={NextApptIcon}
          optionsIconFunctionality={() => true}
        />
        <FeatureComp
          heading="July 1st 2022"
          subHeading="Your last"
          underHeading="appointment"
          icon={LastApptIcon}
          optionsIconFunctionality={() => true}
        />
        <FeatureComp
          heading="Butt Enlargement"
          subHeading="Your last"
          underHeading="spa session activity"
          icon={LastSessionIcon}
          optionsIconFunctionality={() => true}
        />
      </div>
      <div className={Styles.featuresFlexContainer}>
        <div className={Styles.featuresInnerContainer}>
          <RefferalsDetail
            compTitle="Number of refferals"
            dataAmount="12"
            percentage={10}
            progressStatus={true}
          />
          <RefferalsDetail
            compTitle="Active refferals"
            dataAmount="08"
            percentage={4}
            progressStatus={false}
          />
        </div>
        <DiscountData />
      </div>
    </div>
  );
};
const UserNameComp = (props: { name: string }) => {
  return (
    <div className={Styles.userNameComp}>
      <p>
        Good morning, <span>{props.name}</span>!
      </p>
    </div>
  );
};
export default UserNameComp;

export const DashboardHeaderComp = (props: { userName: string }) => {
  return (
    <div className={Styles.DashboardHeaderContainer}>
      <UserNameComp name={props.userName} />
      <BookButton text="Book an appointment" />
    </div>
  );
};

const FeatureComp = (props: {
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  heading: string;
  subHeading: string;
  optionsIconFunctionality: () => boolean;
  underHeading: string;
}) => {
  return (
    <div className={Styles.featureComp}>
      <div className={Styles.optionsIconContainer}>
        <OptionsIcon />
      </div>
      <div className={Styles.featuresContainer}>
        <div className={Styles.featureIconContainer}>
          {/* <NextApptIcon /> */}
          {<props.icon />}
        </div>
        <p className={Styles.heading}>{props.heading}</p>
        <p className={Styles.subheading}>
          {props.subHeading} <br />
          {props.underHeading}
        </p>
      </div>
    </div>
  );
};

export const DashboardNavBar = () => {
  return (
    <div className={Styles.dashboardNavBar}>
      <div className={Styles.dashboardNavBarIconContainer}>
        <ProfileIcon />
      </div>
      <div className={Styles.dashboardNavBarIconContainer}>
        <NotificationIcon />
      </div>
      <div className={Styles.dashboardNavBarIconContainer}>
        <SettingsIcon />
      </div>
      <div
        className={`${Styles.dashboardNavBarIconContainer} ${Styles.exitIcon}`}
      >
        <ExitIcon />
      </div>
    </div>
  );
};

export const ExtraDetails = () => {
  return <div className={Styles.extraDetailsContainer}>
    
  </div>;
};

const RefferalsDetail = (props: {
  compTitle: string;
  dataAmount: string;
  percentage: number;
  progressStatus: boolean;
}) => {
  return (
    <div className={Styles.refferalComp}>
      <div className={Styles.optionsIconContainer}>
        <OptionsIcon />
      </div>
      <div className={Styles.refferalData}>
        <p className={Styles.compTitle}>{props.compTitle}</p>
        <div className={Styles.refferalFlex}>
          <p className={Styles.dataAmount}>{props.dataAmount}</p>
          <div
            className={`${Styles.percentageContainer} ${
              props.progressStatus
                ? Styles.positiveResult
                : Styles.negativeResult
            }`}
          >
            <p
              className={`${Styles.percentage} ${
                props.progressStatus
                  ? Styles.positiveResultText
                  : Styles.negativeResultText
              }`}
            >
              {props.progressStatus ? <span>+</span> : <span>-</span>}
              {props.percentage}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const DiscountData = () => {
  return (
    <div className={Styles.discountData}>
      <div className={Styles.optionsIconContainer}>
        <OptionsIcon />
      </div>
      <div className={Styles.discountTitle}>
        <li></li>
        <p>Your discounts</p>
      </div>
      <li className={Styles.middleLine}></li>
      <div className={Styles.discountDetails}>
        <div>
          <p>with refferals</p>
          <p className={Styles.discountNumber}>
            <WRefIcon />
            42%
          </p>
        </div>
        <div>
          <p>without refferals</p>
          <p className={Styles.discountNumber}>
            <WoutRefIcon />
            22%
          </p>
        </div>
      </div>
    </div>
  );
};


