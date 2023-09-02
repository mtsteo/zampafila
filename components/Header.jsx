import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Colors from "../styles/colors";

const statusBarHeight = StatusBar.currentHeight + 120;
export default function Header() {
  return (
    <View style={style.container}>
      <View style={style.content}>
        <Image
          style={style.logo}
          source={require("../assets/zampa.png")}
        ></Image>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.mainColors.primary,
    height: statusBarHeight,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  logo: {
    width: "80%",
    height: "60%",
  },
});
