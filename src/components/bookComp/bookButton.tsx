import Styles from "./bookButton.module.scss";
interface ButtonProps {
  Styles?: {
    bookButton ?: string;
  };
}
const BookButton = (props: ButtonProps) => {
  return (
    <button
      className={`${
        props.Styles ? props.Styles.bookButton : Styles.bookButton
      }`}
    >
      BOOK NOW
    </button>
  );
};
export default BookButton;
