import Styles from "./bookButton.module.scss";
interface ButtonProps {
  Styles?: {
    bookButton?: string;
  };
  text: string;
}
const BookButton = (props: ButtonProps) => {
  return (
    <button
      className={`${
        props.Styles ? props.Styles.bookButton : Styles.bookButton
      }`}
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
