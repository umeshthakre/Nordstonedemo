/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



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

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Tabs = ()=>{
  return (
         <Tab.Navigator>
    <Tab.Screen 
    component={Calculator}
    name = 'calculator'
    
     />
     <Tab.Screen 
    component={Login}
    name = 'login'
    
     />
     <Tab.Screen 
    component={NotificationS}
    name = 'notification'
    
     />

    <Tab.Screen 
    component={FireImage}
    name = 'fireimage'
     />
     <Tab.Screen 
    component={FireText}
    name = 'firetext'
    
     />
    </Tab.Navigator>
  )
}


const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <PaperProvider >
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
    </Stack.Navigator>   
    </NavigationContainer>
   
    </PaperProvider>
    
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
