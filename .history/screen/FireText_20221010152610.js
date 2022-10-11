import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const FireText = () => {
  const [user, setUser] = useState(null);
  const [text, setText] = useState(null);
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

  const d = await firestore().collection("Firetext").doc(user.email).get().then(documentSnapshot=>{
      if(documentSnapshot.exists){
        setText(documentSnapshot.data().text);
      }else{
        setText("No text found in db");
      }
  })
 }

  return (
    <View>
      {user ? (
        <TextInput>{text}</TextInput>
      ):(
        null
      )
      }
    </View>
  )
}

export default FireText