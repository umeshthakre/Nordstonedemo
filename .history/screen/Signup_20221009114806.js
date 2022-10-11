import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {TextInput} from "react-native-paper"

const Signup = ({navigation}) => {
  return (
    <View>
    <TextInput
        label = "Email"
        placeholder = "enter your email"
    />
    </View>
  )
}



export default Signup