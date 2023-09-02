import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from "firebase/firestore";
import db from "./firebase";

export async function getEmEspera(params) {
  try {
    const q = query(collection(db, "motorista"));

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
    });
  } catch (error) {
    console.log(error)
  }
}

export async function getAtendidos(params) {
    try {
        const q = query(collection(db, "motorista"));
    
        const querySnapShot = await getDocs(q);
        querySnapShot.forEach((doc) => {
          console.log(doc.data());
        });
      } catch (error) {
        console.log(error)
      }
}
