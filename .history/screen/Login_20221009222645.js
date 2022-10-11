import { View, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import {Button, Text, TextInput,Snackbar} from "react-native-paper"
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [visible, setVisible] = useState(null);
const [snackbarMsg, setSnackbarMsg] = useState("");

const onToggleSnackBar = () => setVisible(!visible);

const onDismissSnackBar = () => setVisible(false);


  const flogin = ()=>{
    auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
      console.log("loged in succesfully");
      navigation.navigate("tabs")
    })
    .catch(error=> console.log(error))
  }

  const validate = ()=>{
    if(email !== null){
        if(!validator.isEmail(email)){
            setVisible(!visible);
            setSnackbarMsg("Email is Invalid")
        }
    }else{
        return;
    }
    
   
}
  
  return (
    <View style = {styles.container}>
    <View style = {styles.container}>
    <Text style = {styles.textHead}>Welcome,</Text>
    <Text style = {styles.textHead2}>Login to continue</Text>
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
        onBlur={()=>validate}
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
     onPress={()=>{flogin}}
     >
        Login
     </Button>
     <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Dismiss',
          onPress: () => {
            onDismissSnackBar
          },
        }}>
       <Text style = {{color:"red"}}>{snackbarMsg}</Text> 
      </Snackbar>
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
    }

})




export default Login