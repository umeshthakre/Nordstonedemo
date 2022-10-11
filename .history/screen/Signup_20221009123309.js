import { View, StyleSheet } from 'react-native'
import React from 'react'
import {Button, Text, TextInput} from "react-native-paper"

const Signup = ({navigation}) => {
  return (
    <View style = {styles.container}>
    <View style = {styles.container}>
    <Text style = {styles.textHead}>Welcome,</Text>
    <Text style = {styles.textHead2}>Sign up to continue</Text>
    <TextInput
    style={styles.input1}
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        theme={{ colors: { text: 'black' } }}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
    />
     <TextInput
        label = "password"
        style = {styles.input1}
        type = "password"
        keyboardType="password"
        secureTextEntry = {true}
     />
     <Button
    style = {styles.signupbtn}
     mode='contained'
     >
        Signup
     </Button>
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
        margin:"5%",
        marginBottom:"10"
        backgroundColor:"#fff",
        width:"70%",
        alignSelf:'center',
        color:"#green"
    },
    signupbtn:{
        width:"40%",
        alignSelf:'center',
    },
    textHead:{
        marginTop:"38%",
        fontSize:30,
        alignSelf:'center'
    },
    textHead2:{
        fontSize:20,
        alignSelf:'center'
    }

})




export default Signup