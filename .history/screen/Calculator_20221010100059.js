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
 const [result, setResult] = useState(null);
 const [loading, setLoading] = useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const operationList = [
    {
      label:"addition",
      value:"0"
    },
    {
      label:"substration",
      value:"1"
    },
    {
      label:"mutiplication",
      value:"2"
    }
  ]

  const validate = async()=>{
    if(!firstNumber || !secondNumber || !operation){
      console.log(`${firstNumber},${secondNumber},${operation}`)
      setSnackMsg("Check the entered Values");
      setVisible(true);
      return;
    }
    console.log("input "+JSON.stringify({
      firstNum:parseInt(firstNumber,10),
      secondNum:parseInt(secondNumber,10),
      Operation:operation
    }))

    try{
      setLoading(true);
      const data = await fetch("https://nodecalculatorservice.onrender.com/",
    {
      method:"POST",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        "firstNum":firstNumber,
        "secondNum":secondNumber,
        "Operation":operation
      })
    });
    let d = await data.json();
    console.log("output"+JSON.stringify(d));
    setResult(d.result)
    setLoading(false);
    setFirstNumber("");
    setSecondNumber("");
    
  }catch(err){
    console.log(err)
    setVisible(true);
    setSnackMsg("error please try again");
  } 
  }
    

  return (
    <View style ={styles.container}>
    
    {result?(
      <TextInput
    style = {{width:"80%", marginTop:20 }}
    >{"Result "+result}</TextInput>)
      :(null)}
      <TextInput 
      style={styles.tinput1}
        placeholder = "enter first number"
        keyboardType='number-pad'
        mode='flat'
        value={firstNumber}
        onChangeText={(firstNumber)=>setFirstNumber(firstNumber)}
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
      loading = {loading}
      style = {{marginTop:"5%",width:"40%" }}
      onPress={() => validate()
      }
      ><Text
      style = {{fontSize:18}}
      >
        Calculate
      </Text></Button>

      
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
      marginBottom:"5%",

    },
    tinput1:{
      marginTop:"25%",
      marginBottom:"5%",
      width:"80%"
    },
    drop:{
      height:10,
      alignSelf:"flex-start",


    },
    scontainer:{
      height:50,
      width:"50%"
    }

})

export default Calculator