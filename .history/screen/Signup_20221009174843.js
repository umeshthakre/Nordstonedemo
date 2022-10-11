import { View, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import {Button, Text, TextInput,Snackbar} from "react-native-paper"
import PassMeter from "react-native-passmeter";
import auth from '@react-native-firebase/auth';
import validator from 'validator';
// r
const MAX_LEN = 15,
  MIN_LEN = 6,
  PASS_LABELS = ["Too Short", "Weak", "Normal", "Strong", "Secure"];

  const strengLevels = [
    {
      label: 'Weak',
      labelColor: '#fff',
      widthPercent: '33',
      innerBarColor: '#fe6c6c'
    },
    {
      label: 'Weak',
      labelColor: '#fff',
      widthPercent: '33',
      innerBarColor: '#fe6c6c'
    },
    {
      label: 'Fair',
      labelColor: '#fff',
      widthPercent: '67',
      innerBarColor: '#feb466'
    },
    {
      label: 'Fair',
      labelColor: '#fff',
      widthPercent: '67',
      innerBarColor: '#feb466'
    },
    {
      label: 'Strong',
      labelColor: '#fff',
      widthPercent: '100',
      innerBarColor: '#6cfeb5'
    }
];

// Define too short object
const tooShort = {
    enabled: true,
    label: 'Too short',
    labelColor: 'red'
};
  

const Signup = ({navigation}) => {
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [visible, setVisible] = useState(null);


const onToggleSnackBar = () => setVisible(!visible);

const onDismissSnackBar = () => setVisible(false);

const validate = ()=>{
    if(email !== null){
        if(!validator.isEmail(email)){
            setVisible(!visible);
        }
    }else{
        return;
    }
    flogin();
   
}
const flogin = ()=>{
    
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
        value = {email}
        onChangeText = {(email)=>{setEmail(email)}}
        theme={{ colors: { text: 'black' } }}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        onBlur={validate}
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
     <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Dismiss',
          onPress: () => {
            onDismissSnackBar
          },
        }}>
       <Text style = {{color:"red"}}>Email is inValid</Text> 
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