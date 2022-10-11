import { View, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import {Button, Text, TextInput} from "react-native-paper"
import PassMeter from "react-native-passmeter";
import auth from '@react-native-firebase/auth';
import validator from 'validator';

const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];


  

const Signup = ({navigation}) => {
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);

const flogin = ()=>{
    if(!email || !password){

    }
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
}


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
        value = {password}
        onChangeText = {(password)=>{setPassword(password)}}
     />
     {
        password?(
            <PassMeter
        showLabels
        password={password}
        maxLength={MAX_LEN}
        minLength={MIN_LEN}
        labels={PASS_LABELS}
        style = {styles.passm}
      />
        ):("")
     }
      <TextInput
        label = "confirm password"
        style = {styles.input3}
        type = "confirm password"
        keyboardType="password"
        secureTextEntry = {true}
     />
    <Text style = {styles.loginhere}>Alraedy have a account <Text onPress={()=>{navigation.navigate("login")}} style = {{color:"blue"}}>Login Here</Text></Text>

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
        marginTop:"5%",
        marginBottom:2,
        backgroundColor:"#fff",
        width:"70%",
        alignSelf:'center',
        color:"#green"
    },
    signupbtn:{
        marginTop:32,
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
    },
    loginhere:{
        alignSelf:'center'
    },
    passm:{
        marginTop:5,
        width:50,
        marginRight:10
    },
    input3:{
        
        marginBottom:2,
        backgroundColor:"#fff",
        width:"70%",
        alignSelf:'center',
        color:"#green"
    }

})




export default Signup