import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function EmEspera() {
  return (
    <View style={style.container}>
      <Text>emEspera</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:"center",
    justifyContent:'center'
  }
})