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
        
    />
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    styles:{
        flex:1,
        
    },
    input1:{
        marginTop:80,
        backgroundColor:"#fff",
        width:"70%",
        alignSelf:'center',
        border:'solid red 1px'
    }
})




export default Signup