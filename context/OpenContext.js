import { useEffect, useState, createContext } from "react";
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
import db from '../firebase'
import { getEmEspera } from "../models";

export const OpenContext = createContext();

export const OpenProvider = ({ children }) => {
  const [espera, setEspera] = useState([]);
  const [descarregado, setDescarregado] = useState([]);
  
  const emEspera = async () => {
    const dados = await getEmEspera()
    setEspera(dados)
  };

  useEffect(() => {
    emEspera()
}, [])


  return <OpenContext.Provider value={espera}>
    {children}
  </OpenContext.Provider>
};
