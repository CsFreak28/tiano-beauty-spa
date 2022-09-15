import Styles from "./bookComp.module.scss";
import BookButton from "./bookButton";
import { ReactComponent as BookArrow } from "../../assets/svgs/bookArrow.svg";
import { DatePick } from "./datePick";
import { useState, useReducer, useRef, useContext, useEffect } from "react";
import { ReactComponent as MinusIcon } from "../../assets/svgs/minusIcon.svg";
import { ReactComponent as PlusIcon } from "../../assets/svgs/plusIcon.svg";
import { ReactComponent as DropDownIcon } from "../../assets/svgs/dropdown.svg";
import { ThemeContext } from "../../App";
interface DropDown {
  show: boolean;
  services: Array<string>;
  currentChosenService: string;
}

const BookComp = () => {
  const closeElements = useContext(ThemeContext);
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
  useEffect(() => {
    window.addEventListener("click", () => {
      setDropDownDetails((prev) => {
        return {
          ...prev,
          show: false,
        };
      });
    });
  }, []);
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
            CounterStyles={Styles}
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
          <ServiceDropDown
            DropDownDetails={DropDownDetails}
            setDropDownDetails={setDropDownDetails}
            DropDownStyles={Styles}
          />
        </div>
      </div>
      <BookButton
        text="BOOK NOW"
        bookStraight
        appointmentDetails={{
          appointmentDate: state.appointmentDate,
          numberOfPeople: state.numberOfPeople,
          email: state.email,
          service: DropDownDetails.currentChosenService,
          bookedOn: new Date().toDateString(),
        }}
      />
    </div>
  );
};
export default BookComp;

export function Counter(props: {
  numberOfPeople: number;
  updateNumberOfPeople: React.Dispatch<any>;
  CounterStyles: { readonly [key: string]: string };
}) {
  return (
    <div className={props.CounterStyles.counterComp}>
      <div
        className={props.CounterStyles.button}
        onClick={() => {
          props.updateNumberOfPeople({
            type: "DecreaseNumberOfPeople",
            payload: "",
          });
        }}
      >
        <MinusIcon />
      </div>
      <div className={props.CounterStyles.numberOfPeople}>
        {props.numberOfPeople}
      </div>
      <div
        className={`${props.CounterStyles.button} ${props.CounterStyles.plusButton}`}
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

export const ServiceDropDown = ({
  DropDownDetails,
  setDropDownDetails,
  DropDownStyles,
}: {
  DropDownDetails: DropDown;
  setDropDownDetails: React.Dispatch<React.SetStateAction<DropDown>>;
  DropDownStyles: { readonly [key: string]: string };
}) => {
  const svg = useRef<any>(null);
  return (
    <div className={DropDownStyles.dropdown}>
      <div
        className={DropDownStyles.chosenService}
        onClick={(e) => {
          e.stopPropagation();
          console.log("i am a king");
          e.nativeEvent.stopImmediatePropagation();
          !DropDownDetails.show
            ? (svg.current.style.transform = "rotate(180deg)")
            : (svg.current.style.transform = "rotate(0deg)");
          setDropDownDetails((prev) => {
            return { ...prev, show: !prev.show };
          });
        }}
      >
        <div className={DropDownStyles.chosenServiceTitle}>
          {DropDownDetails.currentChosenService}
        </div>
        <div ref={svg} className={DropDownStyles.svgContainer}>
          <DropDownIcon />
        </div>
      </div>
      {DropDownDetails.show && (
        <div className={DropDownStyles.dropDownComp}>
          {DropDownDetails.services.map((service, i) => {
            if (service !== DropDownDetails.currentChosenService) {
              return (
                <div
                  className={DropDownStyles.service}
                  onClick={(e) => {
                    setDropDownDetails((prev) => {
                      return {
                        ...prev,
                        currentChosenService: service,
                      };
                    });
                  }}
                  key={i}
                >
                  {service}
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
