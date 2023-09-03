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

export async function getEmEspera() {
  try {
    const data = []
    const q = query(
      collection(db, "fila"),
      where("status", "==", "AGUARDANDO")
    );

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      data.push(doc.data())
    });

    return data
  } catch (error) {
    console.log(error);
  }

}

export async function getDescarregados() {
  try {
    const data = []
    const q = query(
      collection(db, "fila"),
      where("status", "==", "DESCARREGADO")
    );

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      data.push(doc.data());
    });
    return data
  } catch (error) {
    console.log(error);
  }
}

async function getFornecedor(params) {
  try {
    const q = query(collection(db, "fornecedor"));
    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
    });
  } catch (error) {
    console.log(error);
  }
}

async function getFrutas() {
  try {
    const q = query(collection(db, "fruta"));

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
    });
  } catch (error) {
    console.log(error);
  }
}

async function getMotoristas() {
  try {
    const q = query(collection(db, "motorista"));

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
    });
  } catch (error) {
    console.log(error);
  }
}

async function getVeiculo() {
  try {
    const q = query(collection(db, "veiculo"));

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
    });
  } catch (error) {
    console.log(error);
  }
}

async function setFila(params) {
  const filaRef = collection(db, "fila");

  const novo = doc(filaRef);

  await setDoc(novo, {
    motorista: "GEREMIAS",
    fruta: "LARANJA",
    fornecedor: "ELIAS DA PIMENTA",
    veiculo: "CONTAINER",
    data_hora: serverTimestamp(),
    status: "AGUARDANDO",
  });
}

// setFila()
