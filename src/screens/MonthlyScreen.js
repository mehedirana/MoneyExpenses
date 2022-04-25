import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const MonthlyScreen =()=> {
  const {expense} = useSelector((e)=> e.expenseList)

  console.log(expense);
  return (
    <View>
      <Text>a ---</Text>
    </View>
  )
}

export default MonthlyScreen