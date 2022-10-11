import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import {Button} from "react-native-paper"
import storage from "@react-native-firebase/storage";
import auth from '@react-native-firebase/auth';

import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
const FireImage = () => {

  const [user, setUser] = useState(null);

  const pickPhotofromLibrary = ()=>{
    launchImageLibrary({quality:1}, (fileobj)=>{
      const uploadTask = storage().ref().child(`/images/${user.email}/`).putFile(fileobj.uri);
      uploadTask.on('state_changed',
      (snapshot)=>{
        var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        if(progrss == 100) alert("image uploaded")
      },
      (error)=>{
        alert('error while uploading');
      },
      ()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
         
        }
      )}
      )
    })
  }
  const something =async ()=>{
    try {
      const user = await auth().currentUser
      setUser(user);
      
    } catch (error) {
      console.log(error)
    }
   }


  useEffect(()=>{
  something()
  },[])

  return (
    <View>
      <Button
      onPress={ ()=>pickPhotofromLibrary()}
      >  
      <Text>FireImage</Text>
      </Button>
    </View>
  )
}

export default FireImage