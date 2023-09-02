import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import EmEspera from "./screens/emEspera/EmEspera";
import Atendidos from "./screens/atendidos/Atendidos";

export default function App() {
  async function getdata() {
    const q = query(collection(db, "motorista"));

    const querySnapShot = await getDocs(q);
    querySnapShot.forEach((doc) => {
      console.log(doc.data());
    });
  }
  const Tab = createBottomTabNavigator();

  return (
    <>
      <Header />
      <StatusBar style="auto" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Em espera" component={EmEspera} />
          <Tab.Screen name="Atendidos" component={Atendidos} />
        </Tab.Navigator>
      </NavigationContainer>
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
