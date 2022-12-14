import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  signOut,
  UserCredential,
  User,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { app, db } from "./firebase.config";
import { getDoc } from "firebase/firestore";
export const auth = getAuth(app);

interface authCredentials {
  name: string;
  phoneNumber: string;
  refferalCode: string;
  email: string;
  password: string;
}

export async function signUp(credentials: authCredentials) {
  let payload: UserCredential | null = null;
  await createUserWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  )
    .then((data) => {
      if (data.user.displayName) {
        sessionStorage.setItem("displayName", data.user.displayName);
      }
      if (auth.currentUser) {
        updateProfile(auth.currentUser, {
          displayName: credentials.name,
        });
        payload = data;
        setDoc(doc(db, "users", data.user.uid), {
          fullName: credentials.name,
          email: credentials.email,
          phoneNumber: credentials.phoneNumber,
          //if the reffersCode input was empty, add a string of no refferer to the user
          refferersCode:
            credentials.refferalCode !== ""
              ? credentials.refferalCode
              : "no refferer",
          currentAppointment: "",
        });
      }
    })
    .catch((e) => {
      console.log(e);
      payload = null;
    });
  return payload;
}

export async function signIn(credentials: authCredentials) {
  let payload: UserCredential | null = null;
  await signInWithEmailAndPassword(
    auth,
    credentials.email,
    credentials.password
  )
    .then((data) => {
      console.log(auth.currentUser);
      payload = data;
      const docRef = doc(db, "users", data.user.uid);
      getDoc(docRef).then((data) => {
        console.log(data.data());
      });
      //store data that needs to be persisted
    })
    .catch((e) => {
      console.log(e);
      payload = null;
    });
  return payload;
}
export function signUserOut() {
  console.log("user has signed out");
  sessionStorage.clear();
}
export function extractInputValues(arrayOfInputElements: HTMLInputElement[]) {
  let credentialsInstance: authCredentials = {
    name: "",
    phoneNumber: "",
    email: "",
    refferalCode: "",
    password: "",
  };
  arrayOfInputElements.forEach((inputElement) => {
    let inputValue = inputElement.value;
    if (inputValue === "" && inputElement.name !== "refferalCode") {
      //append the input name's and their values
      credentialsInstance[
        inputElement.name as keyof typeof credentialsInstance
      ] = inputValue;
    } else {
      credentialsInstance[
        inputElement.name as keyof typeof credentialsInstance
      ] = inputValue;
    }
  });
  return credentialsInstance;
}

export function storeValuesInSessionStorage(value: string, valueName: string) {
  return sessionStorage.setItem(valueName, value);
}
