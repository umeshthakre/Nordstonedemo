/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider,DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import IonIcon from 'react-native-vector-icons/Ionicons'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Button } from 'react-native-paper';

import SplashScreen from 'react-native-splash-screen';
import Calculator from "./screen/Calculator"
import Login from "./screen/Login"
import Signup from './screen/Signup';
import NotificationS from './screen/NotificationS';
import FireImage from './screen/FireImage';
import FireText from './screen/FireText';
import ForgotPassword from './screen/ForgotPassword';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = ()=>{
  return (
         <Tab.Navigator
         screenOptions= {({route})=>({
        tabBarShowLabel: true,
        headerShown:false,
        tabBarInactiveBackgroundColor:'',
        tabBarActiveTintColor:"black",
        tabBarHideOnKeyboard:true,
        tabBarIcon:({color,size,focused})=>{
          console.log(route.name);
          const icons ={
            calculator:'calculator-outline',
            calculatorfocused:'calculator',
            notification:'ios-notifications-outline',
            notificationfocused:'ios-notifications',
            image:'ios-image-outline',
            imagefocused:'ios-image',
            text:'ios-text-outline',
            textfocused:'ios-text',
          };
          return (  
            <IonIcon
            name = {focused ? icons[route.name+"focused"]:icons[route.name]}
            color = "#000"
            size  = {25}
            />
          )
        }
         })} 
         >
    <Tab.Screen 
    component={Calculator}
    name = 'calculator'
    // options={
    //   {
    //     tabBarIcon:({size,color})=>{
    //      <Icon name = "home" size={25} />
    //     }
    //   }
    // }
    
     />
     <Tab.Screen 
    component={NotificationS}
    name = 'notification'
    
     />

    <Tab.Screen 
    component={FireImage}
    name = 'image'
     />
     <Tab.Screen 
    component={FireText}
    name = 'text'
    
     />
    </Tab.Navigator>
  )
}

const theme = {
...DefaultTheme,
colors:{
primary:"#101820FF"
secondary:"#FEE715FF "
}

}

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <PaperProvider theme={theme} >
    <NavigationContainer>

    <Stack.Navigator
    screenOptions={{
    headerShown: false
  }}
    initialRouteName='signup'
    >
      <Stack.Screen
        name = "signup"
        component={Signup}
      />
      <Stack.Screen
        name = "login"
        component = {Login}
      />

      <Stack.Screen
        name = "tabs"
        component={Tabs}
      />
      <Stack.Screen
        name = "forgotpassword"
        component = {ForgotPassword}
      />
    </Stack.Navigator>   
    </NavigationContainer>
   
    </PaperProvider>
    
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
