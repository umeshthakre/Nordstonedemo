import { View, StyleSheet } from 'react-native'
import React from 'react'
import {TextInput} from "react-native-paper"

const Signup = ({navigation}) => {
  return (
    <View style = {styles.container}>
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
    styles:{
        flex:1,
        alignItems:'center',
    },
    input1:{
        marginTop:80,
        backgroundColor:"#fff",
        width:"80%"
    }
})




export default Signup