import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import PushNotification from "react-native-push-notification";
import {  FAB } from 'react-native-paper';
const NotificationS = () => {

  const handlerNotification = ()=>{
    console.log("notification")
    PushNotification.localNotification({
      channelId:"test-channel",
      title:"you clicked notification button",
      message:"Hello, You clicked on notification button"
    })
  }

  return (
    <View style={{flex:1}}>
     <TouchableOpacity
     style={styles.btn}
     onPress = {()=>handlerNotification()}
     >
     <Text style = {{
      color:"#fff",

     }}>
     Get Notification
     </Text>
     </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    height:50,
    borderRadius:200,
    padding:5,
    backgroundColor:"red",
    marginTop:"50%",
    width:"60%",
    alignSelf:"center",
    
    
  }
})

export default NotificationS