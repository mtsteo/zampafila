import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { getAtendidos } from '../../models'

export default function Atendidos() {
  const data = getAtendidos()
  return (
    <View style={style.container}>
      <Text>atendidos</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  }
})