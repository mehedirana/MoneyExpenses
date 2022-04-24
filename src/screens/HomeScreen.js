import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'

const HomeScreen =()=> {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}


export default HomeScreen;

const styles = StyleSheet.create({
  container:{
    flex : 1
  }
})

