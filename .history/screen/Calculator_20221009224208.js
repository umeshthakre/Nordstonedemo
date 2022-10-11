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
      style={styles.tinput}
        placeholder = "enter second number"
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    tinput:{
      
    }

})

export default Calculator