import {
  getFirestore,
  query,
  where,
  collection,
  getDoc,
  doc,
  getDocs,
  updateDoc,
  QuerySnapshot,
  addDoc,
  deleteDoc,
} from "firebase/firestore";
import { DocumentSnapshot, DocumentData } from "firebase/firestore";
import { app } from "../auth/firebase.config";
export async function getNextAppointment() {
  let db = getFirestore(app);
  //get the user's id
  let userId = sessionStorage.getItem("uid") && sessionStorage.getItem("uid");
  //initialize the default text that will display in the user's dashboard if there is current appointment
  let nextAppointment: string = "none yet";
  if (userId !== null) {
    //if the user's id is not null we want to check if the user has any current appointment
    //if the user does not have any current appointments then we want to check if the user
    //has any anonymous appointments
    let docRef = doc(db, "users", userId);
    let currentUserDocument = await getDoc(docRef);
    if (currentUserDocument.exists()) {
      let usersNextAppointment =
        currentAppointmentOnUserDocument(currentUserDocument);
      if (usersNextAppointment === "") {
        //text is the anonymous appointment date, if any
        let text = await checkIfUserBookedAnonymously(currentUserDocument);
        //if text is not an empty string then we want to assign it to the value returned from this function
        if (text !== "") nextAppointment = text;
      } else {
        //if the user has a current appointment or multiple appointments then we want to assign it to the value
        //returned from this function
        nextAppointment = usersNextAppointment;
      }
    } else {
      //if the currentUserDocument is null then it means that no user with that document exists
      //maybe the sessionStorage has been tampered with...
      console.log("a user with this account does not exist");
    }
  }
  return nextAppointment;
}

function currentAppointmentOnUserDocument(
  currentUserDocument: DocumentSnapshot<DocumentData>
) {
  //initialize the currentAppointment returned from this function if the user's document has any currentAppointment
  //value
  let currentAppointment: string = "";
  if (currentUserDocument.exists()) {
    //if currentUserDocument exists then check for the currentAppointment value
    if (currentUserDocument.data().currentAppointment !== "") {
      // console.log("user actually has an appointment");
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
  //let's check if the user booked through the booking component in the home page
  let db = getFirestore(app);
  //the appointment date if the user booked anonymously will be returned by this function
  let returnText: string = "";

  async function checkForUserEmailInAnonymousBookings(email: string) {
    const anonymousEmailsRef = collection(db, "anonymous appointments");
    const q = query(anonymousEmailsRef, where("email", "==", email));
    let usersAnonymousAppointments = await getDocs(q);
    if (!usersAnonymousAppointments.empty) {
      //if the current user has booked anonymously then we check how many times the user has
      console.log(usersAnonymousAppointments.size);
      if (usersAnonymousAppointments.size > 1) {
        //if the user has booked anonymously more than once then the returned Text will be 'multiple appointments'
        returnText = "multiple appointments";
        let userId = currentUserDocument?.id;
        console.log(currentUserDocument.id);
        let docRef = doc(db, "users", userId);
        //update the user's currentAppoinment to multiple appointments
        //so that next time there's no need to check if the user registered anonymously
        updateDoc(docRef, {
          currentAppointment: returnText,
        });
        await addAppointmentToRegisteredAppointments(
          usersAnonymousAppointments
        );
      } else {
        usersAnonymousAppointments.forEach((document) => {
          console.log(document.data().appointmentDate);
          let appointmentDate = document.data().appointmentDate;
          let apptDate = new Date(appointmentDate);
          returnText = apptDate.toDateString();
        });
        addAppointmentToRegisteredAppointments(usersAnonymousAppointments);
        let userId = currentUserDocument.id;
        let docRef = doc(db, "users", userId);
        updateDoc(docRef, {
          currentAppointment: returnText,
        });
      }
    } else {
      console.log("this user did not book an anonymous appointment");
    }
  }

  if (currentUserDocument.exists()) {
    let email = currentUserDocument.data().email;
    await checkForUserEmailInAnonymousBookings(email);
  }
  return returnText;
}

export async function getLastAppointment() {
  let db = getFirestore(app);
  const collectionRef = collection(db, "registerd account appointments");
  let userId =
    sessionStorage.getItem("uid") !== null ? sessionStorage.getItem("uid") : "";

  const q = query(collectionRef, where("uid", "==", userId));
  getDocs(q).then((data) => {
    console.log(data.docs);
    data.docs.forEach((document) => {
      console.log(document);
    });
  });
  //get last appointment after current appointment has been checked
}
async function addAppointmentToRegisteredAppointments(
  appointmentArray: QuerySnapshot<DocumentData>
) {
  let db = getFirestore(app);
  let colRef = collection(db, "registered account appointments");
  let registeredAppointmentsArray = await getDocs(colRef);
  await appointmentArray.forEach((appointment) => {
    registeredAppointmentsArray.docs.forEach((registeredAppt) => {
      console.log(appointment.data().uid, registeredAppt.data().uid);
      if (registeredAppt.data().uid !== appointment.id) {
        addDoc(collection(db, "registered account appointments"), {
          ...appointment.data(),
          appointmentType: "registered",
          uid:appointment.id
        });
        let docRef = doc(db, "anonymous appointments", appointment.id);
        deleteDoc(docRef);
      }
    });
  });
}

async function addAnonymousBookings() {//incomplete function
}

export async function getNextAppointmentStatus() {//incomplete function 
  let db = getFirestore(app);
  let allAppointments: Array<DocumentData> = [];
  const registeredAppointmentCollectionRef = collection(
    db,
    "registered account appointments"
  );
  let userId =
    sessionStorage.getItem("uid") !== null ? sessionStorage.getItem("uid") : "";
  if (userId !== null) {
    let docRef = doc(db, "users", userId);
    let currentUser = await (await getDoc(docRef)).data();
    const currentUserRegisteredAppointments = query(
      registeredAppointmentCollectionRef,
      where("email", "==", currentUser?.email)
    );
    let ideo = await getDocs(currentUserRegisteredAppointments);
    console.log(ideo.size);
    //
  }
}

