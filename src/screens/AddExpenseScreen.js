import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { CategoryList } from '../components/category/CategoryList'
import { COLORS } from '../styles.js/theme'
import DateTimePicker from '@react-native-community/datetimepicker';
import { MonthsList } from '../components/category/MonthsList'

const AddExpenseScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleMonths, setVisibleMonths] = useState(false)
    const [selectedCat, setSelectedCat] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)

    const childToParent = (data) => {
        setSelectedCat(data)
    }
    const childToParentMonths = (data) => {
        setSelectedMonth(data)
    }
    return (
        <View style={styles.container}>
            {isVisible && <CategoryList isVisble={isVisible} setIsVisible={setIsVisible} childToParent={childToParent} />}
            {visibleMonths && <MonthsList visbleMonths={visibleMonths} setVisibleMonths={setVisibleMonths} childToParentMonths={childToParentMonths} />}
            <TouchableOpacity onPress={() => setIsVisible(true)}>
                <Text style={styles.catTxt}>{selectedCat ? selectedCat?.categoryName : 'Select a Category'} </Text>
            </TouchableOpacity>

            <TextInput
                style={{ borderBottomWidth: 1, marginTop: 10 }}
                keyboardType='numeric'
                placeholder='Enter yout amount'
                placeholderTextColor={COLORS.black}
                onChangeText={(e) => { console.log(e) }}
            />
            <TouchableOpacity onPress={() => setVisibleMonths(true)}>
                <Text style={styles.catTxt}>{selectedMonth ? selectedMonth?.name : 'Select a Month'} </Text>
            </TouchableOpacity>

       

        </View>
    )
}

export default AddExpenseScreen;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
    },
    catTxt: {
        fontSize: 16,
        borderBottomWidth: 1,

        color: COLORS.black,
        marginTop: 20
    }
})