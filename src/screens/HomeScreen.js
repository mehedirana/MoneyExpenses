import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native'
import { useSelector } from 'react-redux';
import { ExpenseList } from '../components/home/ExpenseList';
import { COLORS } from '../styles.js/theme';

const {height, width} = Dimensions.get('window')

const addImage = require('../assets/image/plus.png')



const HomeScreen = ({navigation}) => {
  const {expense} = useSelector((e)=> e.expenseList)

  return (
    <SafeAreaView style={styles.container}>
      {/* <TouchableOpacity style={{ backgroundColor: COLORS.whitePure, flex:1, height: height /2 }}>
        <Text style={styles.expenseTxt}>Add monthly expense</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: COLORS.whitePure, flex:1,height: height /2 }}>
        <Text style={styles.expenseTxt}>Add weekly expense</Text>
      </TouchableOpacity> */}
      <ExpenseList data={expense} />
      <TouchableOpacity onPress={()=> navigation.navigate('AddExpense')} style={{flexDirection:'row-reverse', marginBottom:40, marginLeft:30, }}>
        <Image source={addImage} style={{resizeMode:'contain', height:60, width:60,}}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:COLORS.whitePure
    // flexDirection:'row',
    // marginHorizontal:10
  },
  expenseTxt:{
    textAlign:'center',
    fontSize:18,
    fontWeight:"bold",
    color:COLORS.blackSolid
  }
})

