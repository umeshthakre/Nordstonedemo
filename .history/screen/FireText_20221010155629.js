import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import {Button, TextInput,Snackbar} from "react-native-paper"
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const FireText = () => {
  const [user, setUser] = useState(null);
  const [text, setText] = useState(null);
  const [newText, setNewText] = useState(null);
  const [docExists, setDocExists] = useState(null);
  useEffect(()=>{
    something();
  },[])

  useEffect(()=>{
    fetchData();
  },[user]);

  
const onToggleSnackBar = () => setVisible(!visible);

const onDismissSnackBar = () => setVisible(false);

 const something =async ()=>{
  try {
    const user = await auth().currentUser
    setUser(user);
    
  } catch (error) {
    console.log(error)
  }
 }

 const updateText  = async()=>{



try {
  if(!docExists){
    firestore().collection("Firetext").doc(user.email).set({
      text:newText
    }).then(()=>{
      setNewText("")
      console.log("success")
    })
    .catch(error => console.log(error))
  }else{
    firestore().collection("Firetext")
    .doc(user.email)
    .update({
      text:newText
    })
    .then(()=>{
      setText(newText);
      console.log("success")
      setNewText("");;
    })
    .catch((err)=>console.log(err))
  }
} catch (error) {
  console.log(error+" uT")
}
  
 }

 const fetchData = async()=>{

  const d = await firestore().collection("Firetext")
  .doc(user.email).get()
  .then(documentSnapshot=>{
      if(documentSnapshot.exists){
        setDocExists(true);
        setText(documentSnapshot.data().text);
      }else{
        setDocExists(false);
        setText("No text found in db");
      }
  }).catch(err=>console.log(err))

 }

  return (
    <View>
      {user ? (
        <TextInput
        disabled = {true}
        style = {{marginTop:40}}
        >{text}</TextInput>
      ):(
        null
      )
      }
      <TextInput
        keyboardType='default'
        value = {newText}
        style = {{marginTop:40 , width:"90%" ,alignSelf:"center"}}
        onChangeText = {(newText)=>{
          setNewText(newText);
        }}
      />
      <Button
      style={styles.btn}
      mode = "contained"
      onPress = {()=>{
        updateText();
      }}
      >
        Update Text
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
  )
}
const styles = StyleSheet.create({
  btn:{
    marginTop:25,
    width:"40%",
    alignSelf:'center',
  }
})
export default FireText