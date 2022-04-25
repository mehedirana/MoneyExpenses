import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native'
import { CategoryList } from '../components/category/CategoryList'
import { COLORS } from '../styles.js/theme'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import { MonthsList } from '../components/category/MonthsList'
import uuid from 'react-native-uuid';
import { useDispatch } from 'react-redux';
import { addToExpense } from '../store/expense/expenseAction';

const AddExpenseScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [visibleMonths, setVisibleMonths] = useState(false)
    const [selectedCat, setSelectedCat] = useState(null)
    const [amount, setAmount] = useState(null)
    const [selectedMonth, setSelectedMonth] = useState(null)
    const [date, setDate] = useState(new Date());

    const dispatch = useDispatch()

    const handleSaveExpense =(getTime)=>{
        if(!selectedCat) Alert.alert('Empty Field Error','Category needed')
        else if(!amount) Alert.alert('Empty Field Error','Amount needed')
        else if(!getTime) Alert.alert('Empty Field Error','Time and Date not found')
        else
        {
            const data = {}
            data.expenseId =uuid.v4();
            data.category = selectedCat;
            data.expenseAmount = amount;

            dispatch(addToExpense(data))
            setSelectedMonth(null)
            setSelectedCat(null)
            setAmount(null)
            console.log(data, getTime);
        }
    }

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
        })
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

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
                style={{ borderBottomWidth: 1, marginTop: 10, fontSize:16, color:COLORS.primary, borderColor:COLORS.gray }}
                
                keyboardType='numeric'
                placeholder='Enter yout amount'
                placeholderTextColor={COLORS.black}
                onChangeText={(e) => setAmount(e)}
            />
            {/* <TouchableOpacity onPress={() => setVisibleMonths(true)}>
                <Text style={styles.catTxt}>{selectedMonth ? selectedMonth?.name : 'Select a Month'} </Text>
            </TouchableOpacity> */}

            <TouchableOpacity onPress={showDatepicker}>
                <Text style={styles.catTxt}>Select Date!</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={showTimepicker}>
                <Text style={styles.catTxt}>Select time!</Text>
            </TouchableOpacity>
            <Text style={styles.catTxt}>Selected Time and Date: {date.toLocaleString()}</Text>

            <TouchableOpacity style={{backgroundColor:COLORS.primary, borderRadius:9, marginTop:50}} onPress={()=> handleSaveExpense(date.toLocaleString())}>
              <Text style={{color:COLORS.whitePure, paddingVertical:10, textAlign:'center',fontSize:22}}>Save Expense</Text>
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
        borderColor:COLORS.gray,
        color: COLORS.primary,
        marginTop: 20,
        paddingBottom:5
    }
})