import Styles from "./bookComp.module.scss";
import BookButton from "./bookButton";
import { ReactComponent as BookArrow } from "../../assets/svgs/bookArrow.svg";
import { DatePick } from "./datePick";
import { useState, useReducer, useRef } from "react";
import { ReactComponent as MinusIcon } from "../../assets/svgs/minusIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/svgs/plusIcon.svg";
import { ReactComponent as DropDownIcon } from "../../assets/svgs/dropdown.svg";
const BookComp = () => {
  interface DropDown {
    show: boolean;
    services: Array<string>;
    currentChosenService: string;
  }
  const [showDateInput, setShowDateInput] = useState<boolean>(false);
  const svg = useRef<any>(null);
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

  function toggleShowDateInput() {
    setShowDateInput((prev) => true);
  }
  return (
    <div className={Styles.bookContainer}>
      {state.appointmentDate}
      <div className={Styles.bookElement}>
        <div>
          <h6>Arrival date</h6>
          {showDateInput ? (
            <DatePick setDate={dispatch} />
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
          <h6>Number of people</h6>
          <Counter
            numberOfPeople={state.numberOfPeople}
            updateNumberOfPeople={dispatch}
          />
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
              value={state.email}
              onChange={(e) => {
                dispatch({ type: "updateEmail", payload: e.target.value });
              }}
            />
          </p>
        </div>
        <div className={Styles.line}></div>
      </div>
      <div className={Styles.bookElement}>
        <div>
          <h6>Which service</h6>
          <div className={Styles.dropdown}>
            <div
              className={Styles.chosenService}
              onClick={() => {
                !DropDownDetails.show
                  ? (svg.current.style.transform = "rotate(180deg)")
                  : (svg.current.style.transform = "rotate(0deg)");
                setDropDownDetails((prev) => {
                  return { ...prev, show: !prev.show };
                });
              }}
            >
              <div className={Styles.chosenServiceTitle}>
                {DropDownDetails.currentChosenService}
              </div>
              <div ref={svg} className={Styles.svgContainer}>
                <DropDownIcon />
              </div>
            </div>
            {DropDownDetails.show && (
              <div className={Styles.dropDownComp}>
                {DropDownDetails.services.map((service) => {
                  if (service !== DropDownDetails.currentChosenService) {
                    return (
                      <div
                        className={Styles.service}
                        onClick={() => {
                          setDropDownDetails((prev) => {
                            return {
                              ...prev,
                              currentChosenService: service,
                            };
                          });
                        }}
                      >
                        {service}
                      </div>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <BookButton text="BOOK NOW" />
    </div>
  );
};
export default BookComp;

function Counter(props: {
  numberOfPeople: number;
  updateNumberOfPeople: React.Dispatch<any>;
}) {
  return (
    <div className={Styles.counterComp}>
      <div
        className={Styles.button}
        onClick={() => {
          props.updateNumberOfPeople({
            type: "DecreaseNumberOfPeople",
            payload: "",
          });
        }}
      >
        <MinusIcon />
      </div>
      <div className={Styles.numberOfPeople}>{props.numberOfPeople}</div>
      <div
        className={`${Styles.button} ${Styles.plusButton}`}
        onClick={() => {
          props.updateNumberOfPeople({
            type: "IncreaseNumberOfPeople",
            payload: "",
          });
        }}
      >
        <PlusIcon />
      </div>
    </div>
  );
}
