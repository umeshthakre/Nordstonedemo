import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const FireText = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    something();
  },[])

 const something =async ()=>{
  try {
    const user = await auth().currentUser
    setUser(user);
    
  } catch (error) {
    console.log(error)
  }
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