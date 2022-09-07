import Styles from "./bookComp.module.scss";
import BookButton from "./bookButton";
import { ReactComponent as BookArrow } from "../../assets/svgs/bookArrow.svg";
import { DatePick } from "./datePick";
import { useState } from "react";
const BookComp = () => {
  const [showDateInput, setShowDateInput] = useState<boolean>(false);
  function getDiscountDate(): string {
    let currentDate = new Date();
    let todaysDate = currentDate.getDate() + 1;
    // console.log(currentDate.setDate(10));
    let currentDateToNumber = new Date(currentDate.setDate(10)).getDate();
    let discountDate = new Date(
      currentDate.setDate(currentDateToNumber + todaysDate)
    );
    let discountDateLocaleString = discountDate.toLocaleDateString();
    return discountDateLocaleString;
  }
  let discountDate = getDiscountDate();
  function toggleShowDateInput() {
    setShowDateInput((prev) => !prev);
  }
  return (
    <div className={Styles.bookContainer}>
      <div className={Styles.bookElement}>
        <div>
          <h6>Arrival date</h6>
          <p onClick={toggleShowDateInput}>
            {showDateInput ? (
              <DatePick />
            ) : (
              <>
                pick now <BookArrow />
              </>
            )}
          </p>
        </div>
        <div className={Styles.line}></div>
      </div>
      <div className={Styles.bookElement}>
        <div>
          <h6>Next discount</h6>
          <p>{discountDate}</p>
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
        <div className={Styles.line}></div>
      </div>
      <div className={Styles.bookElement}>
        <div>
          <h6>Your email</h6>
          <p>
            pick now <BookArrow />
          </p>
        </div>
      </div>
      <BookButton text="BOOK NOW" />
    </div>
  );
};
export default BookComp;
