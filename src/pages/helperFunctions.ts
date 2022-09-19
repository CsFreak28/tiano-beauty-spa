import React from "react";
import { app } from "./auth/firebase.config";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
export function dashboardNavBarHandler(e: MouseEvent) {}

export function toggleExpandParagraph(
  paragraph: HTMLParagraphElement,
  expandParagraph: boolean,
  setParagraphFn: React.Dispatch<React.SetStateAction<boolean>>
): void {
  if (expandParagraph) {
    paragraph.style.overflow = "visible";
    paragraph.style.whiteSpace = "normal";
    paragraph.style.width = "100%";
    setParagraphFn((expandParagraph) => !expandParagraph);
  } else {
    paragraph.style.overflow = "hidden";
    paragraph.style.width = "70%";
    paragraph.style.whiteSpace = "nowrap";
    setParagraphFn((expandParagraph) => !expandParagraph);
  }
}

export async function bookAppointmentAnonymously(appointmentDetails: {
  appointmentDate: string;
  numberOfPeople: number;
  email: string;
  service: string;
  bookedOn: string;
}) {
  const db = getFirestore(app);
  const collectionRef = collection(db, "anonymous appointments");
  await addDoc(collectionRef, {
    ...appointmentDetails,
    completedAppointment: false,
    completedOn: "",
    appointmentType: "anonymous",
  });
  getDocs(collectionRef).then((data) => {
    data.docs.forEach((doc) => {
      console.log(doc.data());
    });
  });
}
