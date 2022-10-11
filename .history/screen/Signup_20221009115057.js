import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import {TextInput} from "react-native-paper"

const Signup = ({navigation}) => {
  return (
    <View style = {{flex:1}}>
    <TextInput
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        
    />
    </View>
  )
}



export default Signup