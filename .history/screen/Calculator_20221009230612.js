import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import {TextInput,Button,Surface} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";


const Calculator = () => {
 const [operation, setOperation] = useState(null);
 const [firstNumber, setFirstNumber] = useState(null);
 const [secondNumber, setSecondNumber] = useState(null);
 const [showDropDown, setshowDropDown] = useState(true);
  const operationList = [
    {
      label:"addition",
      value:0
    },
    {
      label:"substration",
      value:1
    },
    {
      label:"mutiplication",
      value:2
    }
  ]

  return (
    <View style ={styles.container}>
      <TextInput 
      style={styles.tinput}
        placeholder = "enter first number"
        keyboardType='number-pad'
        mode='flat'
      />
      <TextInput
      style={styles.tinput}
        placeholder = "enter second number"
      />
      <Surface 
      style = {styles.container}
      >
      <DropDown
      style = {styles.drop}
      label={"Operation"}
      mode={"outlined"}
      visible={showDropDown}
      showDropDown={() => setshowDropDown(true)}
      onDismiss={() => setshowDropDown(false)}
      value = {operation}
      setValue={(operation)=>setOperation(operation)}
      
      list={operationList}
    />
      </Surface>
      

      <Button>Calculate</Button>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    tinput:{
      width:"80%",

    },
    drop:{
      height:10,
    },
    containerStyle: {
      height:30
    },

})

export default Calculator