import Styles from "./bookButton.module.scss";
import { bookAppointmentAnonymously } from "../../pages/helperFunctions";
interface ButtonProps {
  Styles?: {
    bookButton?: string;
  };
  text: string;
  bookStraight: boolean;
  appointmentDetails?: {
    appointmentDate: string;
    numberOfPeople: number;
    email: string;
    service: string;
    bookedOn: string;
  };
}
const BookButton = (props: ButtonProps) => {
  return (
    <button
      className={`${
        props.Styles ? props.Styles.bookButton : Styles.bookButton
      }`}
      onClick={() => {
          props.appointmentDetails &&
            bookAppointmentAnonymously(props.appointmentDetails);
      }}
    >
      {props.text}
    </button>
  );
};
export default BookButton;

export const NotNowButton = (props: { Styles?: { notNowButton?: string } }) => {
  return (
    <button
      className={`${
        props.Styles ? props.Styles.notNowButton : Styles.bookButton
      }`}
    >
      NOT NOW
    </button>
  );
};
