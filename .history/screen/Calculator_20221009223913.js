import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {TextInput} from "react-native-paper";
const Calculator = () => {
  return (
    <View style ={styles.container}>
      <TextInput 
        placeholder = "enter first number"
      />
      <TextInput
        placeholder = "enter second number"
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:100,
        color:'white'
    }
})

export default Calculator