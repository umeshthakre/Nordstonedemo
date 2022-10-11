/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

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

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <PaperProvider>
      <SafeAreaView>
      <Button buttonColor='green' textColor = 'white'>Hello</Button>
      <Text style = {{color:"white"}}>hiiiii</Text>
    </SafeAreaView>
    </PaperProvider>
    
  );
};

const styles = StyleSheet.create({
  
});

export default App;
