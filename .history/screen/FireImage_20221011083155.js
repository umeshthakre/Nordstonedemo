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

  const getImagefromDB = ()=>{
    console.log(user);
    storage()
      .ref(`images/${user.email}`) //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
        console.log(imageUrl);
      })
      .catch((e) => console.log('Errors while downloading => ', e));
  }

  const takePhotoFromCamera = ()=>{
    try {
      launchCamera({quality:1},(fileobj)=>{ 
        if(!fileobj){
          return;
        }
        const uploadTask = storage().ref().child(`/images/${user.email}/`).putFile(fileobj.assets[0].uri);
        uploadTask.on('state_changed',
        (snapshot)=>{
          var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          if(progress == 100) alert("image uploaded")
          getImagefromDB();
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
    } catch (error) {
      console.log(error)
    }
    
  }

  const pickPhotofromLibrary = ()=>{
    try {
      launchImageLibrary({quality:0.5}, (fileobj)=>{
        if(fileobj.didCancel){
          return;
        }
        
        console.log(fileobj.assets[0].uri);
        const uploadTask = storage().ref().child(`/images/${user.email}/`).putFile(fileobj.assets[0].uri);
        uploadTask.on('state_changed',
        (snapshot)=>{
          var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          if(progress == 100) alert("image uploaded")
          getImagefromDB();
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
    } catch (error) {
      console.log(error)
    }
   
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
    try {
      getImagefromDB();
    } catch (error) {
     console.log(error); 
    }
    
    }, [user]);



  return (
    <View>
      {imageUrl?(
        <Image
        style = {{height:500,width:400}}
        source = {{uri:imageUrl}}
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