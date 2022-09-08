import Styles from "./fourofour.module.scss";
import { ReactComponent as Logo } from "../assets/svgs/logo.svg";
export const FourOFourPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerDiv}>
        <p className={Styles.mainText}>
          4 <Logo /> 4
        </p>
        <p className={Styles.secondaryText}>oops... the page you were looking for was not found 🤔</p>
    </div>
    </div>
  );
};
