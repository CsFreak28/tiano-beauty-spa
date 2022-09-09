import Styles from "./dashboardComponents2.module.scss";
import UserProfilePicture from "../../assets/images/userProfPic.png";
import { ReactComponent as EditIcon } from "../../assets/svgs/editIcon.svg";
export const SettingsPage = () => {
  return (
    <div className={Styles.settingsContainer}>
      <div className={Styles.heading}>
        <p>My Settings</p>
        <div>
          <img src={UserProfilePicture} alt="user profile picture" />
        </div>
      </div>
      <div className={Styles.userSettingsContainer}>
        <div className={Styles.setting}>
          <p>
            username: chidera rosario <EditIcon />
          </p>
        </div>
        <div className={Styles.setting}>
          <p>
            phone number: 08088663596 <EditIcon />
          </p>
        </div>
        <div className={Styles.setting}>
          <p>
            email: uwagideon092@gmail.com <EditIcon />
          </p>
        </div>
        <div className={Styles.appointmentConfirmationContainer}>
        <p className={Styles.appointmentConfirmation}>
          appointment confirmation method:
        </p>
        <div className={Styles.appointmentConfirmationMethods}>
          <div className={Styles.currentAppointmentMethod}>phone call</div>
          <div className={Styles.appointmentMethod}>email</div>
          <div className={Styles.appointmentMethod}>whatsapp</div>
        </div>
        </div>
      </div>
      <div className={Styles.saveButtons}>
        <div className={Styles.saveSettings}>save settings</div>
        <div className={Styles.reverseChanges}>reverse changes</div>
      </div>
    </div>
  );
};
