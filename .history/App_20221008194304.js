/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
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

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style = {{color:'white', justifyContent:'flex-end'}}>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}



const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <PaperProvider>
    <SafeAreaView>
    <NavigationContainer>

    <Tab.Navigator>
    
      <Tab.Screen
        name = "settings"
        component={SettingsScreen}
      />
      <Tab.Screen
        name = "home"
        component={HomeScreen}
      />
   
    </Tab.Navigator>
      
    </NavigationContainer>
    </SafeAreaView>
    </PaperProvider>
    
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
