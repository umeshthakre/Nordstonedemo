import { View, StyleSheet } from 'react-native'
import React from 'react'
import {TextInput} from "react-native-paper"

const Signup = ({navigation}) => {
  return (
    <View style = {styles.container}>
    <View style = {styles.container}>
    <TextInput
    style={styles.input1}
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        outlineColor='red'
    
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
    />
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    input1:{
        marginTop:'30%',
        backgroundColor:"#fff",
        width:"70%",
        alignSelf:'center',
        border:'solid red 1px',
        color:"#000"
    }
})




export default Signup