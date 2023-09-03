import { StyleSheet, ScrollView, SafeAreaView, RefreshControl } from "react-native";
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
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getEmEspera()
      setRefreshing(false);
    }, 1000);
  }, []);

  async function getEmEspera() {
    try {
      const data = [];
      const q = query(
        collection(db, "fila"),
        where("status", "==", "AGUARDANDO"),
        orderBy("data_hora", "asc"),
        limit(10)
      );

      const querySnapShot = await getDocs(q);
      querySnapShot.forEach((doc) => {
        data.push(doc.data());
      });

      setEspera(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getEmEspera();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={style.view} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        {espera.map((a, index) => {
          return (
            <FilaItem
              key={index}
              data={a}
              position={index}
              date={new Date(
                a.data_hora.seconds * 1000 + a.data_hora.nanoseconds / 1000000
              )
                .toString()
                .substr(15, 10)}
            />
          );
        })}
      </ScrollView>
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
    height:"100%"
  },
});
