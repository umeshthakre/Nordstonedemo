import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import PushNotification from "react-native-push-notification";
import { Button, FAB } from 'react-native-paper';
const NotificationS = () => {

  const handlerNotification = ()=>{
    console.log("notification")
    PushNotification.localNotification({
      channelId:"notification-channel",
      title:"you clicked notification button"
    })
  }

  return (
    <View>
     <Button
     mode='contained'
     >
      Press
     </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 50,
  },
})

export default NotificationS