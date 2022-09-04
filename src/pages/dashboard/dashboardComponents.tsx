import Styles from "./dashboardComponents.module.scss";
import BookButton from "../../components/bookComp/bookButton";
import { ReactComponent as OptionsIcon } from "../../assets/svgs/optionsicon.svg";
import { ReactComponent as NextApptIcon } from "../../assets/svgs/nextappticon.svg";
import { ReactComponent as LastApptIcon } from "../../assets/svgs/lastappticon.svg";
import { ReactComponent as LastSessionIcon } from "../../assets/svgs/lastsessionicon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/svgs/settingsIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/svgs/profileIcon.svg";
import { ReactComponent as NotificationIcon } from "../../assets/svgs/notificationIcon.svg";
import { ReactComponent as ExtraNotificationIcon } from "../../assets/svgs/extraNotificationIcon.svg";
import { ReactComponent as ExitIcon } from "../../assets/svgs/exitIcon.svg";
import { ReactComponent as WRefIcon } from "../../assets/svgs/wRefIcon.svg";
import { ReactComponent as WoutRefIcon } from "../../assets/svgs/woutRefIcon.svg";
import { ReactComponent as MsgIcon } from "../../assets/svgs/msgIcon.svg";
import { ReactComponent as CalendarIcon } from "../../assets/svgs/calendarIcon.svg";
import { ReactComponent as DropdownIcon } from "../../assets/svgs/dropdown.svg";
import { ReactComponent as ReplyIcon } from "../../assets/svgs/replyIcon.svg";
import { ReactComponent as CheckMarkIcon } from "../../assets/svgs/secondCheckMark.svg";
import { ReactComponent as TrashCanIcon } from "../../assets/svgs/trashcan.svg";
import { ReactComponent as ReScheduleIcon } from "../../assets/svgs/redoIcon.svg";
import { useRef } from "react";
import UserProfilePicture from "../../assets/images/userProfPic.png";
import { useNavigate, useOutletContext } from "react-router-dom";
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

export const NotficationPage = () => {
  return (
    <div className={Styles.notificationPage}>
      <p className={Styles.pageTitle}>My Notifications</p>
      <div className={Styles.notificationsContainer}>
        <div className={Styles.notification}>
          <div className={Styles.titleFlex}>
            <p className={Styles.notificationTitle}>successful re-schedule</p>
            <p className={Styles.timeStamp}>5 mins ago</p>
          </div>
          <p className={Styles.notificationMessage}>
            your appointment re-schedule was successful.
          </p>
          <div className={Styles.actions}>
            <div className={Styles.buttonsContainer}>
              <div className={Styles.markButton}>mark as seen</div>
              <div className={Styles.otherActionButton}>
                reply <ReplyIcon />
              </div>
            </div>
            <div className={Styles.checkMark}>
              <CheckMarkIcon />
            </div>
          </div>
        </div>
        <div className={Styles.notification}>
          <div className={Styles.titleFlex}>
            <p className={Styles.notificationTitle}>appointment booked</p>
            <p className={Styles.timeStamp}>23 mins ago</p>
          </div>
          <p className={Styles.notificationMessage}>
            your appointment scheduling was successful.
          </p>
          <div className={Styles.actions}>
            <div className={Styles.buttonsContainer}>
              <div className={Styles.markButton}>mark as seen</div>
              <div className={Styles.otherActionButton}>
                reply <ReplyIcon />
              </div>
            </div>
            <div className={Styles.checkMark}>
              <CheckMarkIcon />
            </div>
          </div>
        </div>
        <div className={Styles.notification}>
          <div className={Styles.titleFlex}>
            <p
              className={Styles.notificationTitle}
              style={{
                color: "red",
              }}
            >
              appointment was cancelled
            </p>
            <p className={Styles.timeStamp}>5 mins ago</p>
          </div>
          <p className={Styles.notificationMessage}>
            we were notified recently to cancel your appointment.
          </p>
          <div className={Styles.actions}>
            <div className={Styles.buttonsContainer}>
              <div className={Styles.markButton}>mark as seen</div>
              <div className={Styles.otherActionButton}>
                re-schedule <ReScheduleIcon />
              </div>
            </div>
            <div className={Styles.checkMark}>
              <CheckMarkIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.trashCanContainer}>
        <TrashCanIcon />
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
        <div className={Styles.featureIconContainer}>{<props.icon />}</div>
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
  const navigate = useNavigate();
  return (
    <div className={Styles.dashboardNavBar}>
      <div
        className={Styles.dashboardNavBarIconContainer}
        onClick={(e) => {
          navigate("/auth/dashboard/profile");
          console.log(e.clientY);
        }}
      >
        <ProfileIcon />
      </div>
      <div
        className={Styles.dashboardNavBarIconContainer}
        onClick={() => {
          navigate("/auth/dashboard/notifications");
        }}
      >
        <NotificationIcon />
      </div>
      <div
        className={Styles.dashboardNavBarIconContainer}
        onClick={() => {
          navigate("/auth/dashboard/settings");
        }}
      >
        <SettingsIcon />
      </div>
      <div
        className={`${Styles.dashboardNavBarIconContainer} ${Styles.exitIcon}`}
      >
        <ExitIcon />
      </div>
      <div className={Styles.pageIndicator}></div>
    </div>
  );
};

export const ExtraDetails = () => {
  return (
    <div className={Styles.extraDetailsContainer}>
      <div className={Styles.iconFlex}>
        <div className={Styles.innerIconFlex}>
          <div>
            <CalendarIcon />
          </div>
          <div>
            <ExtraNotificationIcon />
          </div>
          <div>
            <MsgIcon />
          </div>
        </div>
        <div className={Styles.profileImgContainer}>
          <img src={UserProfilePicture} alt="" />
          <DropdownIcon />
        </div>
      </div>
      <div className={Styles.extraDetailsInnerContainer}>
        <p className={Styles.primaryText}>Next appointment status</p>
        <p className={Styles.secondaryText}>in progress</p>
        <div className={Styles.progressBarContainer}>
          <div className={Styles.mainProgressBar}></div>
        </div>
        <p className={Styles.primaryText}>Remaining 3 days</p>
        <p className={Styles.secondaryText}>
          to your teeth whitening appointment
        </p>
        <div className={Styles.viewStatus}>view status</div>
      </div>
    </div>
  );
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
