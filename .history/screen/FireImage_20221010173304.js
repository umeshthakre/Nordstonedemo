import { View, Text } from 'react-native'
import React from 'react'
import {Button} from "react-native-paper"

import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
const FireImage = () => {

  const pickPhotofromLibrary = ()=>{
    launchImageLibrary({quality:1}, (fileobj)=>{
      console.log(fileobj);
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