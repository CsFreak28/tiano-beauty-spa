import Styles from "./popup.module.scss";
import { DatePick } from "../bookComp/datePick";
import { useState, useReducer, useEffect } from "react";
import { ServiceDropDown } from "../bookComp/bookComp";
import { Counter } from "../bookComp/bookComp";
import BookButton from "../bookComp/bookButton";
const AppointmentPopup = () => {
  const [date, setDate] = useState<string>();
  interface DropDown {
    show: boolean;
    services: Array<string>;
    currentChosenService: string;
  }
  const [DropDownDetails, setDropDownDetails] = useState<DropDown>({
    show: false,
    services: [
      "teeth whitening",
      "butt enlargement",
      "manicure",
      "body massage",
      "facials",
      "Hair treatment",
    ],
    currentChosenService: "body massage",
  });

  interface appointmentDetails {
    appointmentDate: string;
    numberOfPeople: number;
    email: string;
  }
  interface ActionInterface {
    payload: string;
    type: string;
  }
  function reducer(state: appointmentDetails, action: ActionInterface) {
    if (action.type === "IncreaseNumberOfPeople") {
      let numberOfPeople = state.numberOfPeople + 1;
      return {
        ...state,
        numberOfPeople: numberOfPeople,
      };
    } else if (action.type === "DecreaseNumberOfPeople") {
      let numberOfPeopleIsGreaterThanZero = state.numberOfPeople > 1;
      if (numberOfPeopleIsGreaterThanZero) {
        let numberOfPeople = state.numberOfPeople - 1;
        return {
          ...state,
          numberOfPeople: numberOfPeople,
        };
      } else {
        return state;
      }
    } else if (action.type === "updateEmail") {
      return {
        ...state,
        email: action.payload,
      };
    } else if (action.type === "updateAppointmentDate") {
      return {
        ...state,
        appointmentDate: action.payload,
      };
    }
    return state;
  }
  const initialState: appointmentDetails = {
    appointmentDate: "",
    numberOfPeople: 1,
    email: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className={Styles.layerBlur}></div>
      <div className={Styles.container}>
        <div className={Styles.innerContainer}>
          <p className={Styles.heading}>book an appointment</p>
          <div className={Styles.questionsContainer}>
            <div className={Styles.question}>
              <p>1.</p>
              <p>
                which day would you <br /> like to come for the <br />{" "}
                appointment?
              </p>
              <DatePick setDate={setDate} />
            </div>
            <div className={Styles.question}>
              <p>2.</p>
              <p>
                which service would <br /> you like to book an <br />{" "}
                appointment for?
              </p>
              <ServiceDropDown
                DropDownDetails={DropDownDetails}
                setDropDownDetails={setDropDownDetails}
                DropDownStyles={Styles}
              />
            </div>
            <div className={Styles.question}>
              <p>3.</p>
              <p>
                how many people <br /> would you like to book <br /> an{" "}
                appointment with?
              </p>
              <Counter
                CounterStyles={Styles}
                numberOfPeople={state.numberOfPeople}
                updateNumberOfPeople={dispatch}
              />
            </div>
            <div className={Styles.question}>
              <p>4.</p>
              <p>
                please provide us
                <br /> with an email
              </p>
              <div>
                <input
                  type="text"
                  placeholder="uwagideon092@gm..."
                  className={Styles.emailInput}
                  value={state.email}
                  onChange={(e) => {
                    dispatch({ type: "updateEmail", payload: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>
          <div className={Styles.bookButtonContainer}>
            <BookButton
              text="Book an appointment now"
              bookStraight={false}
              appointmentDetails={{
                bookedOn: new Date().toDateString(),
                service: DropDownDetails.currentChosenService,
                email: state.email,
                numberOfPeople: state.numberOfPeople,
                appointmentDate: state.appointmentDate,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentPopup;
