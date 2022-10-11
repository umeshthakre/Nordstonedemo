import { View, Text } from 'react-native'
import React from 'react'
import {Button} from "react-native-paper"

import {launchImageLibrary} from 'react-native-image-picker';
const FireImage = () => {

  const pickPhotofromLibrary = ()=>{
    launchImageLibrary((fileobj)=>{
      console.log(fileobj)
    })
  }

  return (
    <View>
      <Button
      onPress={ ()=>}
      >  
      <Text>FireImage</Text>
      </Button>
    </View>
  )
}

export default FireImage