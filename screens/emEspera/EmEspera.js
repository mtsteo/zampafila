import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import FilaItem from "../../components/FilaItem";
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
import db from "../../firebase";

export default function EmEspera() {
  const [espera, setEspera] = useState([]);

  async function getEmEspera() {
    try {
      const data = [];
      const q = query(
        collection(db, "fila"),
        where("status", "==", "AGUARDANDO")
      );

      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        data.push(doc.data());
      });

      setEspera(data)
    } catch (error) {
      console.log(error);
    }
  }
  

  useEffect(() => {
    getEmEspera()
  }, [])

  return (
    <SafeAreaView>
      <ScrollView style={style.view}>{espera.map((a,index)=>{
        return(
          <FilaItem key={index} data={a} position ={index}/>
        )
      })}</ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    marginLeft: "1%",
    marginRight: "1%",
    marginTop: "2%",
  },
});
