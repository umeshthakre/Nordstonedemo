import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import auth from '@react-native-firebase/auth';

const FireText = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    something();
  },[])

 const something =async ()=>{
  try {
    const user = await auth().currentUser

  } catch (error) {
    console.log(error)
  }
 }
  return (
    <View>
      <Text>FireText</Text>
    </View>
  )
}

export default FireText