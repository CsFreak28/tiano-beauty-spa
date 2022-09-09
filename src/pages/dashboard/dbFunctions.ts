import {
  getFirestore,
  query,
  where,
  collection,
  getDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { DocumentSnapshot, DocumentData } from "firebase/firestore";
import { app } from "../auth/firebase.config";
export async function getNextAppointment() {
  let db = getFirestore(app);
  let userId = sessionStorage.getItem("uid") && sessionStorage.getItem("uid");
  let nextAppointment: string = "none yet";
  if (userId !== null) {
    let docRef = doc(db, "users", userId);
    let currentUserDocument = await getDoc(docRef);
    if (currentUserDocument.exists()) {
      let usersNextAppointment = setAppointment(currentUserDocument);
      if (usersNextAppointment === "") {
        nextAppointment = await checkIfUserBookedAnonymously(
          currentUserDocument
        );
      } else {
        nextAppointment = usersNextAppointment;
      }
    } else {
      console.log("a user with this account does not exist");
    }
  }
  console.log(nextAppointment);
  return nextAppointment;
}

function setAppointment(currentUserDocument: DocumentSnapshot<DocumentData>) {
  let currentAppointment: string = "";
  if (currentUserDocument.exists()) {
    if (currentUserDocument.data().currentAppointment !== "") {
      currentAppointment = currentUserDocument.data().currentAppointment;
    }
  } else {
    console.log("this user account does not exist");
  }
  return currentAppointment;
}

async function checkIfUserBookedAnonymously(
  currentUserDocument: DocumentSnapshot<DocumentData>
) {
  let db = getFirestore(app);
  let userBookedAnonymously = false;
  let returnText: string = "";

  async function checkForUserEmailInAnonymousBookings(email: string) {
    const anonymousEmailsRef = collection(db, "anonymous appointments");
    const q = query(anonymousEmailsRef, where("email", "==", email));
    let userDoc = await getDocs(q);
    if (!userDoc.empty) {
      console.log(userDoc.size);
      if (userDoc.size > 1) {
        returnText = "multiple appointments";
      }
      userDoc.forEach((doc) => {
        console.log(doc.data().appointmentDate);
        let appointmentDate = doc.data().appointmentDate;
        let apptDate = new Date(appointmentDate);
        returnText = apptDate.toDateString();
      });
    } else {
      console.log("this user did not book an anonymous appointment");
    }
  }

  if (currentUserDocument.exists()) {
    let email = currentUserDocument.data().email;
    await checkForUserEmailInAnonymousBookings(email);
  }
  console.log(returnText);
  return returnText;
}
