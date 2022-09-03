import UserNameComp from "./dashboardComponents";
import { signUserOut } from "../auth/auth";
import Styles from "./dashboard.module.scss";
import { DashboardNavBar } from "./dashboardComponents";
import { DashboardHeaderComp } from "./dashboardComponents";
import { Outlet } from "react-router-dom";
import { ExtraDetails } from "./dashboardComponents";
import FooterSection from "../../components/sections/footer.section";
const DashBoard = () => {
  function signUserOutAndRoute() {
    signUserOut();
    window.location.reload();
  }
  let userName = sessionStorage.getItem("displayName");
  let userNameProp = userName !== null ? userName : "";
  let outletContext = {};
  return (
    <>
    <div className={Styles.dashboardContainer}>
      <DashboardHeaderComp userName={userNameProp} />
      <div className={Styles.pageLayoutFlex}>
        <DashboardNavBar />
        <Outlet />
        <ExtraDetails/>
      </div>
      <button onClick={signUserOutAndRoute}>sign out</button>
    </div>
      <FooterSection showSocialMediaLinks={false}/>
    </>
  );
};
export default DashBoard;
