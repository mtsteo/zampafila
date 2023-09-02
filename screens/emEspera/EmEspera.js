import {  StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import { getEmEspera } from "../../models";
import FilaItem from "../../components/FilaItem";

export default function EmEspera() {
  const data = getEmEspera();
  return (
      <SafeAreaView>
        <ScrollView style={style.view}>
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
          <FilaItem />
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
  view :{
    marginLeft:'1%',
    marginRight:'1%',
    marginTop:"2%"
  }
});
