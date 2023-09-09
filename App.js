import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Header from "./components/Header";
import EmEspera from "./screens/emEspera/EmEspera";
import Descarregados from "./screens/descarregados/Descarregados";
import { AntDesign } from "@expo/vector-icons";
import colors from "./styles/colors";
import { OpenProvider } from "./context/OpenContext";

export default function App() {


  const Tab = createBottomTabNavigator();

  return (
    <>
      <Header />
      <OpenProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarStyle: { height: "12%" },
              tabBarActiveTintColor: colors.mainColors.textColors.textPrimary,
              tabBarLabelStyle: { fontWeight: 700, fontSize: 20 },
            }}
          >
            <Tab.Screen
              name="Em espera"
              component={EmEspera}
              options={{
                tabBarInactiveTintColor: colors.mainColors.primary,
                tabBarActiveBackgroundColor: colors.mainColors.secundary,

                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="clockcircleo" size={28} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Descarregados"
              component={Descarregados}
              options={{
                tabBarInactiveTintColor: colors.mainColors.secundary,
                tabBarActiveBackgroundColor: colors.mainColors.primary,
                tabBarIcon: ({ color, size }) => (
                  <AntDesign name="checkcircleo" size={28} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </OpenProvider>
    </>
  );
}

