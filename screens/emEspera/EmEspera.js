import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { getEmEspera } from '../../models'

export default function EmEspera() {
  const data = getEmEspera()
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