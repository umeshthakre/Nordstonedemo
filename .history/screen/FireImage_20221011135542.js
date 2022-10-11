import { View, Text,StyleSheet,Image } from 'react-native'
import React,{useEffect,useState} from 'react'
import {Button} from "react-native-paper"
import storage from "@react-native-firebase/storage";
import auth from '@react-native-firebase/auth';

import {launchImageLibrary,launchCamera} from 'react-native-image-picker';
const FireImage = () => {
  
  const [imageUrl, setImageUrl] = useState(undefined);
  const [user, setUser] = useState(null);
  const [cLoading, setCLoading] = useState(false);
  const [gLoading, setGLoading] = useState(false);
  const getImagefromDB = ()=>{
    console.log(user);
    storage()
      .ref(`images/${user.email}`) //name in storage in firebase console
      .getDownloadURL()
      .then((url) => {
        setImageUrl(url);
        console.log(imageUrl);
        setCLoading(false);
        setGLoading(false);
      })
      .catch((e) => console.log('Errors while downloading => ', e));

  }

  const takePhotoFromCamera = ()=>{
    try {
      launchCamera({quality:1},(fileobj)=>{ 
        if(fileobj.didCancel){
          return;
        }else if (fileobj.errorCode) {
          console.log("ImagePicker ErrorCode: ", fileobj.errorCode);
          alert("ImagePicker ErrorCode: " + fileobj.errorCode);
          return
      } else if (fileobj.errorMessage) {
          console.log("ImagePicker ErrorMessage: ", fileobj.errorMessage);
          alert("ImagePicker ErrorMessage: " + fileobj.errorMessage);
          return;
      }
        setCLoading(true);
        const uploadTask = storage().ref().child(`/images/${user.email}/`).putFile(fileobj.assets[0].uri);
        uploadTask.on('state_changed',
        (snapshot)=>{
          var progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          if(progress == 100) alert("image uploaded")
          getImagefromDB();
        },
        (error)=>{
          alert('error while uploading');
          setCLoading(false);
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
        setGLoading(true);
        if(fileobj.didCancel){
          return;
        }else if (fileobj.errorCode) {
          console.log("ImagePicker ErrorCode: ", fileobj.errorCode);
          alert("ImagePicker ErrorCode: " + fileobj.errorCode);
          setGLoading(false);
          return
      } else if (fileobj.errorMessage) {
          console.log("ImagePicker ErrorMessage: ", fileobj.errorMessage);
          alert("ImagePicker ErrorMessage: " + fileobj.errorMessage);
          setGLoading(false);
          return;
      }
        setGLoading(true);
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
          setGLoading(false);
        },
        ()=>{
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=>{
           console.log('file is available at',downloadURL);
           setGLoading(false);
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
        style = {{
      width: '100%',
      height: '70%',
      resizeMode: 'contain'
        }}
        source = {{uri:imageUrl}}
      />
      ):
      (null)
      }
      

      <Button
      style = {styles.btn}
      onPress={ ()=>takePhotoFromCamera()}
      mode = 'contained'
      loading = {cLoading}
      >  
      
      <Text>Use Camera</Text>
      </Button>
      <Button
       style = {styles.btn}
      onPress={ ()=>pickPhotofromLibrary()}
      mode = 'contained'
      loading = {gLoading}
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