import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import validator from 'validator';
import {
    TextInput,
    Button,
    Snackbar,
} from "react-native-paper"



const ForgotPassword = () => {
    const [email, setEmail] = useState(null);
    const [snackMsg, setSnackMsg] = useState(null);
    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const validate = ()=>{
        console.log(email)
        if(!email){
            setVisible(true);
            setSnackMsg("check email");
            return;
        }
        if(!validator.isEmail(email)){
            setVisible(true);
            setSnackMsg("check email");
            return;
        }
    }

  return (
    <View>
      <TextInput
    style={styles.input1}
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        theme={{ colors: { text: 'black' } }}
        autoCapitalize="none"
        value = {email}
        onChangeText = {(email)=>{setEmail(email)}}
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        onBlur={()=>validate()}
    />  
    <Button
    mode='contained'
    style={styles.signupbtn}
    onPress={()=>validate()}
    >
        Reset Password
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
       <Text style = {{color:"red"}}>{snackMsg}</Text> 
      </Snackbar>
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