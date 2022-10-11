import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const FireText = () => {
  const [user, setUser] = useState(null);

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
  const data = await firestore().collection("Firetext").doc("umeshthakre6").onSnapshot(documentSnapshot => {
    console.log('User data: ', documentSnapshot.data());
  });
  console.log(data);
 }

  return (
    <View>
      {user ? (
        <Text>{user.email}</Text>
      ):(
        null
      )
      }
    </View>
  )
}

export default FireText