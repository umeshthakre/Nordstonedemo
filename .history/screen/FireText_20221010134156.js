import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';


const FireText = () => {
  const [user, setUser] = useState(null);
  const getUser = async()=>{
    const user = await auth().currentUser;
    setUser(user);
  }

useEffect(() => {
  getUser();
}, [])

  return (
    
    <View>
      {user ? (
        <Text>{user.email }</Text>
      ):(
        null
      )
      }
      
    </View>
  )
}

export default FireText