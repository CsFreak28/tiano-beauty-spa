import Styles from "./bookComp.module.scss";
import BookButton from "./bookButton";
import { ReactComponent as BookArrow } from "../../assets/svgs/bookArrow.svg";
import { DatePick } from "./datePick";
import { useState, useEffect, useReducer } from "react";
import { ReactComponent as MinusIcon } from "../../assets/svgs/minusIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/svgs/plusIcon.svg";
const BookComp = () => {
  const [showDateInput, setShowDateInput] = useState<boolean>(false);
  const [appointmentDate, setAppointmentDate] = useState<string | undefined>(
    ""
  );
  interface appointmentDetails {
    appointmentDate: string;
    numberOfPeople: string;
    email: string;
  }
  interface ActionInterface {
    payload: string;
    type: string;
  }
  function reducer(state: appointmentDetails, action: any) {
    return state;
  }
  const initialState: appointmentDetails = {
    appointmentDate: "",
    numberOfPeople: "",
    email: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  function updateAppointmentDate(newApptDate: string | undefined) {
    return setAppointmentDate((prev) => newApptDate);
  }
  useEffect(() => {}, [appointmentDate]);
  function getDiscountDate(): string {
    let currentDate = new Date();
    let todaysDate = currentDate.getDate() + 1;
    let currentDateToNumber = new Date(currentDate.setDate(10)).getDate();
    let discountDate = new Date(
      currentDate.setDate(currentDateToNumber + todaysDate)
    );
    let discountDateLocaleString = discountDate.toLocaleDateString();
    return discountDateLocaleString;
  }
  let discountDate = getDiscountDate();
  function toggleShowDateInput() {
    setShowDateInput((prev) => true);
  }
  return (
    <div className={Styles.bookContainer}>
      {appointmentDate}
      <div className={Styles.bookElement}>
        <div>
          <h6>Arrival date</h6>
          {showDateInput ? (
            <DatePick setDate={updateAppointmentDate} />
          ) : (
            <>
              <p onClick={toggleShowDateInput}>
                pick now <BookArrow />
              </p>
            </>
          )}
        </div>
        {!showDateInput && <div className={Styles.line}></div>}
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
          <Counter />
        </div>
        <div className={Styles.line}></div>
      </div>
      <div className={Styles.bookElement}>
        <div>
          <h6>Your email</h6>
          <p>
            <input
              type="text"
              placeholder="uwagideon092@gm..."
              className={Styles.emailInput}
            />
          </p>
        </div>
      </div>
      <BookButton text="BOOK NOW" />
    </div>
  );
};
export default BookComp;

function Counter() {
  const [numberOfPeople, setNumberOfPeople] = useState<number>(1);
  function reduceNumberOfPeople() {
    if (numberOfPeople > 1) {
      setNumberOfPeople((prev) => prev - 1);
    }
  }
  function increaseNumberOfPeople() {
    setNumberOfPeople((prev) => prev + 1);
  }
  return (
    <div className={Styles.counterComp}>
      <div className={Styles.button} onClick={reduceNumberOfPeople}>
        <MinusIcon />
      </div>
      <div className={Styles.numberOfPeople}>{numberOfPeople}</div>
      <div
        className={`${Styles.button} ${Styles.plusButton}`}
        onClick={increaseNumberOfPeople}
      >
        <PlusIcon />
      </div>
    </div>
  );
}
