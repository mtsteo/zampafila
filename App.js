import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
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

import Header from "./components/Header";

export default function App() {
  async function getdata() {
    const q = query(collection(db, "motorista"));

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
    });
  }

  //  getdata()

  return (
    <>
      <Header></Header>
      <View style={styles.container}>
        <Text>Será que vai da certo?</Text>
        <Text>{process.env.APP_APYKEY}</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
