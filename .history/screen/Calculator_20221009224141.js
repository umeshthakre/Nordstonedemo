import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import {TextInput} from "react-native-paper";
const Calculator = () => {
  return (
    <View style ={styles.container}>
      <TextInput 
      style={styles.tinput}
        placeholder = "enter first number"
        keyboardType='number-pad'
        mode='flat'
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
    tinput:{
      width:"80%",
      height:30
    }

})

export default Calculator