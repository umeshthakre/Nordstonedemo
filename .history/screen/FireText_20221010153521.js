import { View, Text,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import {Button, TextInput} from "react-native-paper"
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

 const something =async ()=>{
  try {
    const user = await auth().currentUser
    setUser(user);
    
  } catch (error) {
    console.log(error)
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
        onChangeText = {(newText)=>{
          setNewText(newText);
        }}
      />
      <Button
      style={styles.btn}
      mode = "contained"
      >
        Update Text
      </Button>

    </View>
  )
}
const styles = StyleSheet({
  btn:{
    height:35,
    borderRadius:200,
    padding:5,
    backgroundColor:"red",
    marginTop:"50%",
    alignSelf:"center",
    paddingHorizontal:40,
    paddingVertical:5
  }
})
export default FireText