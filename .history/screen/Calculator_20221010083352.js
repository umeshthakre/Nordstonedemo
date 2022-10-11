import { View, Text,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import {TextInput,Button,Surface,Snackbar} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";


const Calculator = () => {
 const [operation, setOperation] = useState(null);
 const [firstNumber, setFirstNumber] = useState(null);
 const [secondNumber, setSecondNumber] = useState(null);
 const [showDropDown, setshowDropDown] = useState(true);
 const [visible, setVisible] = React.useState(false);
 const [snackMsg, setSnackMsg] = useState(null);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

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

  const validate = ()=>{
    if(!firstNumber || !secondNumber || !operation){
      setSnackMsg("Check the entered Values");
      setVisible(true);
      
    }
  }

  return (
    <View style ={styles.container}>
      <TextInput 
      style={styles.tinput1}
        placeholder = "enter first number"
        keyboardType='number-pad'
        mode='flat'
        value={firstNumber}
        onChangeText={()=>setFirstNumber(firstNumber)}
      />
      <TextInput
      style={styles.tinput}
        placeholder = "enter second number"
        keyboardType='number-pad'
        mode='flat'
        value = {secondNumber}
        onChangeText = {(secondNumber)=>setSecondNumber(secondNumber)}
      />
      <Surface 
      style = {styles.scontainer}
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
      <Button
      mode='contained'
      onPress={() => validate()
      }
      >Calculate</Button>
       <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        action={{
          label: 'Undo',
          onPress: () => {
            
          },
        }}>
        {snackMsg}
      </Snackbar>
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
    tinput1:{
      height:20,
      width:"80%"
    },
    drop:{
      height:10,
      alignSelf:"flex-start"
    },
    scontainer:{
      height:50,
      width:"50%"
    }

})

export default Calculator