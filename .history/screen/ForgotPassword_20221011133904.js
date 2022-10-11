import { View,StyleSheet,Text } from 'react-native'
import React,{useState} from 'react'
import validator from 'validator';
import {
    Button,
    Snackbar,
    TextInput
} from "react-native-paper"
import {Formik} from "formik";
import * as yup from 'yup';
import auth from '@react-native-firebase/auth';



const ForgotPassword = () => {
    const [snackMsg, setSnackMsg] = useState(null);
    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const validate = ()=>{
        console.log(email)
        if(!email){
            setVisible(true);
            setSnackMsg("email invalid");
            return;
        }
        if(!validator.isEmail(email)){
            setVisible(true);
            setSnackMsg("email invalid");
            return;
        }
        if(email === ""){
            setVisible(true);
            setSnackMsg("email invalid");
            return;
        }
    }

    const emailValidationSchema = yup.object().shape({
        email:yup.string()
        .email("please enter valid email")
        .required("please enter your email!"),
        
      })

    const resetPassword = ()=>{
        console.log(email)
        auth().sendPasswordResetEmail(email)
        .then((result)=>{
           setVisible(true);
           setSnackMsg("mail sent succesfully check your mail")
        })
        .catch(err  =>{
            setVisible(true);
            setSnackMsg("error please try again")
        })
    }

  return (
    <View>
    <Formik
    validationSchema={emailValidationSchema}
    initialValues={{email:""}}
    >
    
    {({values,error,handleChange,setFieldTouched})=>(
        <>
        <TextInput
    style={styles.input1}
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        theme={{ colors: { text: 'black' } }}
        autoCapitalize="none"
        value = {values.email}
        onChangeText = {handleChange('email')}
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        onBlur={setFieldTouched('email')}
    />  
         {touched.email && errors.email &&
              <Text style={{ fontSize: 12, color: '#FF0D10',alignSelf:'center' }}>{errors.email}</Text>
            }
    <Button
    mode='contained'
    style={styles.signupbtn}
    onPress={()=> resetPassword() }
    >
        <Text >Reset Password</Text>
    </Button>  
    <Snackbar
    style={{marginTop:"80%"}}
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Dismiss',
          onPress: () => {
            onDismissSnackBar
          },
        }}>
       <Text style = {{color:"red"}}>{snackMsg}</Text> 
      </Snackbar>
    </>
    )}
    
    </Formik>
      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    input1:{
        marginTop:"20%",
        marginBottom:2,
        backgroundColor:"#fff",
        width:"70%",
        alignSelf:'center',
        color:"#green"
    },
    signupbtn:{
        marginTop:25,
        width:"60%",
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

export default ForgotPassword