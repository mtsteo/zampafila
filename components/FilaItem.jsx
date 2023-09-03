import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import colors from "../styles/colors";

export default function FilaItem(props) {
  return (
    <Card style={style.container}>
      <View style={style.content}>
        <Text style={style.positionText}>{props.position + 1 + "º"}</Text>
        <Text style={style.contentText}>{props.data.motorista}</Text>
        <Text style={style.contentDate}>{props.date}</Text>
      </View>
    </Card>
  );
}

const style = StyleSheet.create({
  container: {
    height: 50,
    marginTop: "1%",
    marginBottom: "1%",
    justifyContent: "center",
  },
  content: {
    marginLeft: "5%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  contentText: {
    marginLeft: "5%",
    fontWeight: "700",
    fontSize: 18,
  },
  positionText: {
    fontWeight: "700",
    fontSize: 25,
  },
  contentDate: {
    color: colors.mainColors.secundary,
    fontWeight: "700",
    fontSize: 15,
  },
});
