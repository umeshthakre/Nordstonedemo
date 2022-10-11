import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const FireText = () => {
  const [user, setUser] = useState(null);
  const [text, setText] = useState(null);
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
  const data = await firestore().collection("Firetext").doc(user.email).onSnapshot(documentSnapshot => {
    console.log('User data: ', documentSnapshot.data());
    // setText(documentSnapshot.data().text);

  });

 }

  return (
    <View>
      {user ? (
        <Text>{text}</Text>
      ):(
        null
      )
      }
    </View>
  )
}

export default FireText