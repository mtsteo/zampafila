import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/Header";
import EmEspera from "./screens/emEspera/EmEspera";
import Atendidos from "./screens/atendidos/Atendidos";

export default function App() {
 
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
