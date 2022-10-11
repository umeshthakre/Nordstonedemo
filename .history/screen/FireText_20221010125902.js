import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';

const FireText = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {

   auth().getCurrentUser((user)=>{
    console.log(user);
    setUser(user);
   }).catch(err=>console.log(err))
   
  }, [])
  
  return (
    <View>
      <Text>FireText</Text>
    </View>
  )
}

export default FireText