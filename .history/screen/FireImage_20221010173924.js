import { View, Text } from 'react-native'
import React from 'react'
import {Button} from "react-native-paper"
import storage from "@react-native-firebase/storage";

import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
const FireImage = () => {

  const [user, setUser] = useState(null);

  const pickPhotofromLibrary = ()=>{
    launchImageLibrary({quality:1}, (fileobj)=>{
      storage().ref().child(`/${user.email}`)
    })
  }

  return (
    <View>
      <Button
      onPress={ ()=>pickPhotofromLibrary()}
      >  
      <Text>FireImage</Text>
      </Button>
    </View>
  )
}

export default FireImage