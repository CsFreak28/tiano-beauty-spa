import signUpImg from "../../assets/images/signupPageImg.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Styles from "./authenticate.module.scss";
import { signIn, signUp } from "./auth";
import { ReactComponent as WrongInputSvg } from "../../assets/svgs/error.svg";
import { ReactComponent as CheckMarkSvg } from "../../assets/svgs/checkmark.svg";
import { useNavigate } from "react-router-dom";
import { extractInputValues } from "./auth";
import { storeValuesInSessionStorage } from "./auth";
import FooterSection from "../../components/sections/footer.section";
import { UserCredential } from "firebase/auth";
const Authenticate = () => {
  let { typeOfAuth } = useParams();
  let nameInput = useRef<any>(null);
  let phoneNumberInput = useRef<any>(null);
  let passwordInput = useRef<any>(null);
  let emailInput = useRef<any>(null);
  let refferalCodeInput = useRef<any>(null);

  //state for the input elements checkmarks
  let [nameInputHasCriteria, setNameInputCriteria] = useState<boolean>(false);
  let [phoneNumberInputHasCriteria, setphoneNumberInputCriteria] =
    useState<boolean>(false);
  let [passwordInputHasCriteria, setPasswordInputCriteria] =
    useState<boolean>(false);
  let [emailInputHasCriteria, setEmailInputCriteria] = useState<boolean>(false);

  let navigate = useNavigate();
  function confirmInputValue(
    inputValue: string,
    arrayOfCriterias?: string[]
  ): boolean {
    let noCriteriasNeeded = arrayOfCriterias == undefined;
    let criteriasAreNeeded = arrayOfCriterias !== undefined;
    if (noCriteriasNeeded && inputValue !== "") {
      return true;
    } else if (criteriasAreNeeded) {
      let AllCriteriasWereMet: boolean = false;
      arrayOfCriterias?.forEach((criteria) => {
        if (criteria == "nigerian phone number") {
          if (inputValue.length === 11) {
            AllCriteriasWereMet = true;
          }
        } else if (criteria == "password") {
          function testPassword(inputValue: string): boolean {
            let lowerCaseTest = /[a-z]/g;
            let upperCaseTest = /[A-Z]/g;
            let hasNumber = /\d/;
            return (
              lowerCaseTest.test(inputValue) &&
              upperCaseTest.test(inputValue) &&
              hasNumber.test(inputValue)
            );
          }
          if (inputValue.length >= 8 && testPassword(inputValue)) {
            AllCriteriasWereMet = true;
          }
        } else if (
          criteria == "email" &&
          inputValue.includes("@") &&
          inputValue.includes(".com")
        ) {
          AllCriteriasWereMet = true;
        }
      });
      return AllCriteriasWereMet;
    }
    return false;
  }

  const [authType, setAuthType] = useState<string | undefined>(typeOfAuth);
  useEffect(() => {
    setAuthType(typeOfAuth);
  }, [typeOfAuth]);
  let authTypeIsSignUp: boolean = authType === "signUp";
  let authName: string = authTypeIsSignUp ? "sign up" : "sign in";
  let alternativeMessage: string = authTypeIsSignUp
    ? "Already have an account ?"
    : "Don't have an account ?";
  return (
    <>
      {typeOfAuth === "signIn" || typeOfAuth === "signUp" ? (
        <div className={Styles.container}>
          <div className={Styles.innerContainer}>
            <div className={Styles.headersContainer}>
              <p className={Styles.heading}>
                {" "}
                {authName} to <span>tiano</span> beauty spa
              </p>
              {authTypeIsSignUp && (
                <p className={Styles.secondaryHeading}>
                  BECOME A MEMBER OF THE PAMPERED BABIES CLUB <br /> REFER
                  OTHERS AND EARN DISCOUNTS, TRACK YOUR APPOINTMENTS <br /> AND
                  SO MUCH MORE...
                </p>
              )}
            </div>
            <div className={Styles.formFlexContainer}>
              <div className={Styles.formContainer}>
                {authTypeIsSignUp && (
                  <div className={Styles.inputsFlex}>
                    <div className={Styles.inputContainer}>
                      <p>
                        FULL-NAME{" "}
                        {nameInputHasCriteria ? (
                          <CheckMarkSvg />
                        ) : (
                          <WrongInputSvg />
                        )}
                      </p>
                      <input
                        type="text"
                        placeholder="eg.john doe"
                        ref={nameInput}
                        name="name"
                        onChange={(e) => {
                          let inputValue = e.target.value;
                          const inputMetTheCriteria =
                            confirmInputValue(inputValue);
                          setNameInputCriteria(inputMetTheCriteria);
                        }}
                      />
                    </div>
                    <div className={Styles.inputContainer}>
                      <p>
                        PHONE NUMBER{" "}
                        {phoneNumberInputHasCriteria ? (
                          <CheckMarkSvg />
                        ) : (
                          <WrongInputSvg />
                        )}
                      </p>
                      <input
                        type="number"
                        placeholder="08088663596"
                        ref={phoneNumberInput}
                        max="4"
                        name="phoneNumber"
                        onChange={(e) => {
                          let inputValue = e.target.value;
                          const inputMetTheCriteria = confirmInputValue(
                            inputValue,
                            ["nigerian phone number"]
                          );
                          setphoneNumberInputCriteria(inputMetTheCriteria);
                        }}
                      />
                    </div>
                  </div>
                )}
                <div className={Styles.inputsFlex}>
                  <div className={Styles.inputContainer}>
                    <p>
                      PASSWORD{" "}
                      {passwordInputHasCriteria ? (
                        <CheckMarkSvg />
                      ) : (
                        <WrongInputSvg />
                      )}
                    </p>
                    <input
                      type="text"
                      placeholder="eg.jo1324SF"
                      ref={passwordInput}
                      name="password"
                      onChange={(e) => {
                        let inputValue = e.target.value;
                        const inputMetTheCriteria = confirmInputValue(
                          inputValue,
                          ["password"]
                        );
                        setPasswordInputCriteria(inputMetTheCriteria);
                      }}
                    />
                  </div>
                  <div className={Styles.inputContainer}>
                    <p>
                      EMAIL{" "}
                      {emailInputHasCriteria ? (
                        <CheckMarkSvg />
                      ) : (
                        <WrongInputSvg />
                      )}
                    </p>
                    <input
                      type="text"
                      placeholder="johndoe@gmail.com"
                      ref={emailInput}
                      name="email"
                      onChange={(e) => {
                        let inputValue = e.target.value;
                        let inputMetTheCriteria = confirmInputValue(
                          inputValue,
                          ["email"]
                        );
                        setEmailInputCriteria(inputMetTheCriteria);
                      }}
                    />
                  </div>
                </div>
                {authTypeIsSignUp && (
                  <div className={Styles.refferal}>
                    {" "}
                    <div className={Styles.refferalInner}>
                      <p>REFFERAL CODE</p>
                      <input
                        type="text"
                        placeholder="optional"
                        ref={refferalCodeInput}
                        name="refferalCode"
                      />
                    </div>
                  </div>
                )}
                <div className={Styles.authButtonContainer}>
                  <button
                    className={Styles.authButton}
                    onClick={() => {
                      if (authName === "sign up") {
                        let inputValuesAreProvided =
                          passwordInputHasCriteria &&
                          emailInputHasCriteria &&
                          nameInputHasCriteria &&
                          phoneNumberInputHasCriteria;
                        if (inputValuesAreProvided) {
                          const extractedValues = extractInputValues([
                            emailInput.current,
                            passwordInput.current,
                            phoneNumberInput.current,
                            refferalCodeInput.current,
                            nameInput.current,
                          ]);
                          signUp(extractedValues);
                        }
                      } else {
                        let inputsAreProvided =
                          passwordInputHasCriteria && emailInputHasCriteria;
                        if (inputsAreProvided) {
                          const extractedValues = extractInputValues([
                            emailInput.current,
                            passwordInput.current,
                          ]);
                          signIn(extractedValues).then(
                            (data: UserCredential | null) => {
                              if (data !== null) {
                                storeValuesInSessionStorage(
                                  data.user.uid,
                                  "uid"
                                );
                                data.user.displayName !== null &&
                                  storeValuesInSessionStorage(
                                    data.user.displayName,
                                    "displayName"
                                  );
                                navigate("/auth/dashboard/profile", {
                                  replace: true,
                                });
                              }
                              console.log(data);
                            }
                          );
                        }
                      }
                    }}
                  >
                    {authName}
                  </button>
                </div>
                <div className={Styles.alternativeMessage}>
                  <p>
                    {alternativeMessage}{" "}
                    <Link
                      to={authTypeIsSignUp ? "/auth/signIn" : "/auth/signUp"}
                    >
                      <span>{authTypeIsSignUp ? "sign in" : "sign up"}</span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img src={signUpImg} alt="" />
          <div className={Styles.bgLayer}></div>
          <FooterSection showSocialMediaLinks={false} />
        </div>
      ) : (
        <div>Page not found</div>
      )}
    </>
  );
};
export default Authenticate;
