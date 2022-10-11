import { View, StyleSheet ,Text} from 'react-native'
import React,{useState} from 'react'
import {Button, TextInput,Snackbar} from "react-native-paper"
import auth from '@react-native-firebase/auth';
import ForgotPassword from './ForgotPassword';
import validator from "validator"
import {Formik} from "formik";
import * as yup from 'yup';
import YupPassword from 'yup-password'
YupPassword(yup) // extend yup
const Login = ({navigation}) => {

const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const [visible, setVisible] = useState(null);
const [snackbarMsg, setSnackbarMsg] = useState("");

const onToggleSnackBar = () => setVisible(!visible);

const onDismissSnackBar = () => setVisible(false);


  const flogin = ()=>{
    
    auth().signInWithEmailAndPassword(email,password)
    .then((u)=>{
      console.log("loged in succesfully"+u);
      navigation.navigate("tabs")
    })
    .catch(error=> console.log(error))
  }

  const validate = ()=>{
    if(email !== null){
        if(!validator.isEmail(email)){
            setVisible(true);
            setSnackbarMsg("Email is Invalid")
        }
    }else{
      setVisible(true);
      setSnackbarMsg("Email is Invalid");
      return
    }
    
   
}

const loginValidationSchema = yup.object().shape({
  email:yup.string()
  .email("please enter valid email")
  .required("please enter your email!"),
  password:yup.string()
  .min(8,({min})=>`password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special`)
  .required('Password is required')
  .minLowercase(1, 'password must contain at least 1 lower case letter')
  .minUppercase(1, 'password must contain at least 1 upper case letter')
  .minNumbers(1, 'password must contain at least 1 number')
  .minSymbols(1, 'password must contain at least 1 special character')
})
  
  return (
    <View style = {styles.container}>
    <View style = {styles.container}>
    <Text style = {styles.textHead}>Welcome,</Text>
    <Text style = {styles.textHead2}>Login to continue</Text>
    <Formik
    validationSchema={loginValidationSchema}
    initialValues={{email:"",password:""}}
    onSubmit = {values=>console.log(values)}
    >
    {({handleChange,handleBlur,handleSubmit,setFieldTouched,touched,errors,isValid,values})=>(
      <>
      <TextInput
    style={styles.input1}
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        autoCapitalize="none"
        value = {values.email}
        onChangeText = {handleChange('email')}
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
        onChangeText = {handleChange('password')}
        onBlur = {()=>setFieldTouched('password')}
     />
     {touched.password && errors.password &&
              <Text style={{ fontSize: 12, color: '#FF0D10', alignSelf:"center" }}>{errors.password}</Text>
            }
     <Text 
     style = {{alignSelf:"center" ,marginTop:2, color:"blue"}} 
     onPress={()=> navigation.navigate("forgotpassword")}>Forgot Password ?</Text>

     <Button
    style = {styles.signupbtn}
     mode='contained'
     onPress={handleSubmit}
     disabled = {!isValid}
     >
        <Text>
        Login
        </Text>
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
        marginTop:25,
        width:"40%",
        alignSelf:'center',
    },
    textHead:{
        marginTop:"38%",
        fontSize:30,
        alignSelf:'center',
        color:"black"
    },
    textHead2:{
        fontSize:20,
        alignSelf:'center',
        color:"black"
    },
    loginhere:{
        alignSelf:'center'
    }

})




export default Login