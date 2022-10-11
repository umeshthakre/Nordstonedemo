import { View, StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import {Button, Text, TextInput,Snackbar} from "react-native-paper"
import PassMeter from "react-native-passmeter";
import auth from '@react-native-firebase/auth';
import validator from 'validator';
import PushNotification from "react-native-push-notification";
import {Formik} from "formik";
import * as yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup

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
const [snackbarMsg, setSnackbarMsg] = useState("");

const onToggleSnackBar = () => setVisible(!visible);

const onDismissSnackBar = () => setVisible(false);

const createChannels = ()=>{
  PushNotification.createChannel(
    {
      channelId:"test-channel",
      channelName:"Test Channel"
    }
  )
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
const flogin = ()=>{
    console.log(email,password);
    auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
    navigation.navigate("tabs")
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      setVisible(true);
      setSnackbarMsg("Email is already is use");
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      setVisible(true);
      setSnackbarMsg("Email is already is use");
    }

    console.error(error);
  });
}

useEffect(() => {
  createChannels();
}, [])

const signupValidationSchema = yup.object().shape({
  email:yup.string()
  .email("please enter valid email")
  .required("please enter your email!"),
  password:yup.string()
  .min(8,({min})=>`password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special`)
  .required('Password is required')
  .minLowercase(1, 'password must contain at least 1 lower case letter')
  .minUppercase(1, 'password must contain at least 1 upper case letter')
  .minNumbers(1, 'password must contain at least 1 number')
  .minSymbols(1, 'password must contain at least 1 special character'),
  cpass: yup.string()
     .oneOf([yup.ref('password'), null], 'Passwords must match')
  
})
  

  return (
    <View style = {styles.container}>
    <View style = {styles.container}>
    <Text style = {styles.textHead}>Welcome,</Text>
    <Text style = {styles.textHead2}>Sign up to continue</Text>
    <Formik
    validationSchema={signupValidationSchema}
    initialValues={{email:"",password:"",cpass:""}}
    onSubmit = {(values)=>console.log(values)}
    >
    {({ values, handleChange, errors, setFieldTouched, touched, isValid, handleSubmit})=>(
      <>
      {console.log(errors)}
      <TextInput
    style={styles.input1}
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        value = {values.email}
        onChangeText = {handleChange('email')}
        theme={{ colors: { text: 'black' } }}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        onBlur={()=>setFieldTouched('email')}
    />
    {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10',alignSelf:'center' }}>{errors.email}</Text>
            }
     <TextInput
        label = "password"
        style = {styles.input1}
        type = "password"
        keyboardType="password"
        secureTextEntry = {true}
        value = {values.password}
        onBlur= {()=>setFieldTouched('password')}
        onChangeText = {handleChange('password')}
     />
      {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10', alignSelf:"center" }}>{errors.password}</Text>
            }
      <TextInput
        label = "confirm password"
        style = {styles.input3}
        type = "confirm password"
        value = {values.cpass}
        onChangeText = {handleChange('cpass')}
        onBlur = {()=>setFieldTouched('cpass')}
        keyboardType="password"
        secureTextEntry = {true}
     />
      {touched.cpass && errors.cpass &&
              <Text style={{ fontSize: 12, color: '#FF0D10',marginBottom:5, alignSelf:"center" }}>{errors.ccpass}</Text>
            }
    <Text style = {styles.loginhere}>Alraedy have a account <Text onPress={()=>{navigation.navigate("login")}} style = {{color:"blue"}}>Login Here</Text></Text>

     <Button
    style = {styles.signupbtn}
     mode='contained'
     onPress={handleSubmit}
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
       <Text style = {{color:"red"}}>{snackbarMsg}</Text> 
      </Snackbar>
      </>
    )}
      
    </Formik>
   
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