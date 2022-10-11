/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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




const App = () => {

  return (
    <SafeAreaView>
      <Button buttonColor='#c1c1c1' textColor = 'white'>Hello</Button>
      <Text style = {{color:"white"}}>hiiiii</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
