import Styles from "./bookComp.module.scss";
import BookButton from "./bookButton";
import { ReactComponent as BookArrow } from "../../assets/svgs/bookArrow.svg";
const BookComp = () => {
  return (
    <div className={Styles.bookContainer}>
      <div className={Styles.bookElement}>
        <div>
          <h6>Arrival date</h6>
          <p>
            pick now <BookArrow />
          </p>
        </div>
        <div className={Styles.line}></div>
      </div>
      <div className={Styles.bookElement}>
        <div>
          <h6>Next discount</h6>
          <p>28/10/2022</p>
        </div>
        <div className={Styles.line}></div>
      </div>
      <div className={Styles.bookElement}>
        <div>
          <h6>Number of people</h6>
          <p>
            pick now <BookArrow />
          </p>
        </div>
      </div>
      <BookButton/>
    </div>
  );
};
export default BookComp;
