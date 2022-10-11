import { View, Text,Snackbar } from 'react-native'
import React from 'react'
import validator from 'validator';



const ForgotPassword = () => {
    const [email, setEmail] = useState(null);
    const [snackMsg, setSnackMsg] = useState(null);
    const [visible, setVisible] = useState(false);
    const onToggleSnackBar = () => setVisible(!visible);

    const onDismissSnackBar = () => setVisible(false);

    const validate = ()=>{
        if(!email){
            setVisible(true);
            setSnackMsg("check email");
        }
        validator.isEmail(email)
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
        onBlur={()=>validate}
    />    
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

export default ForgotPassword