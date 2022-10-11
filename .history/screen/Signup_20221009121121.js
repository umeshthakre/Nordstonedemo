import { View, StyleSheet } from 'react-native'
import React from 'react'
import {TextInput} from "react-native-paper"

const Signup = ({navigation}) => {
  return (
    <View style = {styles.container}>
    <View style = {styles.container}>
    <TextInput
    style={styles.input1}
        label = "Email"
        placeholder = "enter your email"
        type = 'outlined'
        theme={{ colors: { text: 'black' } }}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
    />
     <TextInput
        type="outlined"
        
        underlineColor={this.theme.colors.primary}
        onChangeText={this.props.onChange}
        label={this.props.label}
        value={this.props.value || "Replace this text"}
        placeholder={this.props.placeholder}
        theme={{ colors: { text: this.props.style.color } }}
      />
    </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    input1:{
        marginTop:'30%',
        backgroundColor:"#fff",
        width:"70%",
        alignSelf:'center',
        color:"#green"
    }
})




export default Signup