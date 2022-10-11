import { View, Text,StyleSheet,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import {Button} from "react-native-paper"
import storage from "@react-native-firebase/storage";
import auth from '@react-native-firebase/auth';

import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
const FireImage = () => {
  
  const [imageUrl, setImageUrl] = useState(undefined);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);





  const takePhotoFromCamera = ()=>{
    launchCamera({quality:1},(fileobj)=>{
      
      const uploadTask = storage().ref().child(`/images/${user.email}/`).putFile(fileobj.assets[0].uri);
      uploadTask.on('state_changed',
      (snapshot)=>{
        var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        if(progress == 100) alert("image uploaded")
      },
      (error)=>{
        alert('error while uploading');
      },
      ()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
         console.log('file is available at',downloadURL);
        })
      })
    })
  }

  const pickPhotofromLibrary = ()=>{
    launchImageLibrary({quality:1}, (fileobj)=>{
      console.log(fileobj.assets[0].uri);

      const uploadTask = storage().ref().child(`/images/${user.email}/`).putFile(fileobj.assets[0].uri);
      uploadTask.on('state_changed',
      (snapshot)=>{
        var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
        if(progress == 100) alert("image uploaded")
      },
      (error)=>{
        alert('error while uploading');
      },
      ()=>{
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
         console.log('file is available at',downloadURL);
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

  useEffect(() => {
    console.log(user);
      storage()
        .ref(`images/${user.email}.jpg`) //name in storage in firebase console
        .getDownloadURL()
        .then((url) => {
          setImageUrl(url);
        })
        .catch((e) => console.log('Errors while downloading => ', e));
    }, [user]);


  return (
    <View>
      {imageUrl?(
        <Image
        src = {imageUrl}
      />
      ):
      (null)
      }
      

      <Button
      style = {styles.btn}
      onPress={ ()=>takePhotoFromCamera()}
      mode = 'contained'
      >  
      
      <Text>Use Camera</Text>
      </Button>
      <Button
       style = {styles.btn}
      onPress={ ()=>pickPhotofromLibrary()}
      mode = 'contained'
      >  
      <Text>Use Gallery</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    margin:10,
  }
})

export default FireImage