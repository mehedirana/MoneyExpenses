import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { COLORS } from '../styles.js/theme';

const {height, width} = Dimensions.get('window')


const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{ backgroundColor: COLORS.whitePure, flex:1, height: height /2 }}>
        <Text style={styles.expenseTxt}>Add monthly expense</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: COLORS.whitePure, flex:1,height: height /2 }}>
        <Text style={styles.expenseTxt}>Add weekly expense</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginHorizontal:10
  },
  expenseTxt:{
    textAlign:'center',
    fontSize:18,
    fontWeight:"bold",
    color:COLORS.blackSolid
  }
})

