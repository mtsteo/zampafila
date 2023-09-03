import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import FilaItem from '../../components/FilaItem'
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


export default function Descarregados() {
  const [Descarregados, setDescarregados] = useState([])

   async function getDescarregados() {
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
      setDescarregados(data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getDescarregados()
  }, [])
  return (
    <SafeAreaView>
      <ScrollView style={style.view}>{Descarregados.map((a,index)=>{
        return(
          <FilaItem key={index} data={a} position ={index}/>
        )
      })}</ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  }
})