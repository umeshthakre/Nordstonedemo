import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Calculator = () => {
  return (
    <View>
      <Text>Calculator</Text>
    </View>
  )
}
const styles = StyleSheet({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:100
    }
})

export default Calculator