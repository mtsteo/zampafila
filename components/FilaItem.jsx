import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";

export default function FilaItem(props) {
  return (
    <Card style={style.container}>
      <View>
        <Text>Fulano de talkldnlg spjhspk</Text>
      </View>
    </Card>
  );
}

const style = StyleSheet.create({
  container: {
    height: 50,
    marginTop: "1%",
    justifyContent: "center",
  },
});
