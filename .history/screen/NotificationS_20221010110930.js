import { View, Text } from 'react-native'
import React from 'react'
import PushNotification from "react-native-push-notification";
import { FAB } from 'react-native-paper';
const NotificationS = () => {

  const handlerNotification = ()=>{
    PushNotification.localNotification({
      channelId:"notification-channel",
      title:"you clicked notification button"

    })
  }

  return (
    <View>
      <FAB 
      mode ='flat'
      onPress={() =>{
        handlerNotification()
      }}
      >
      <Text>NotificationS</Text>
      </FAB>
    </View>
  )
}

export default NotificationS