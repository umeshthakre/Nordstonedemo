import { View, StyleSheet } from 'react-native'
import React from 'react'
import {TextInput} from "react-native-paper"

const Signup = ({navigation}) => {
  return (
    <View style = {{flex:1}}>
    <TextInput
    style={styles.input1}
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        
    />
    </View>
  )
}

const styles = StyleSheet.create({
    input1:{
        
    }
})




export default Signup