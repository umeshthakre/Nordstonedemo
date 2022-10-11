import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import PushNotification from "react-native-push-notification";
import { Button, FAB } from 'react-native-paper';
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
     <Button
     style={styles.btn}
     mode='contained'
     onPress = {()=>handlerNotification()}
     >
      Notification
     </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    marginTop:"50%",
    width:"70%"
    alignSelf:"center"
  }
})

export default NotificationS