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
  StatusBar,
  StyleSheet,
  Text
} from 'react-native';
import DrawerNavigation from './src/navigation/drawer-navigation/DrawerNavigation';
import StackNavigation from './src/navigation/stack-navigation/StackNavigation';




const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      {/* <StackNavigation /> */}
      <DrawerNavigation/>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
