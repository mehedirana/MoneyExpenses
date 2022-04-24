import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { CategoryList } from '../components/category/CategoryList'
import { COLORS } from '../styles.js/theme'


const AddExpenseScreen = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [selectedCat, setSelectedCat] = useState(null)

    const childToParent = (data) => {
        setSelectedCat(data)
    }
    return (
        <View style={styles.container}>
            {isVisible && <CategoryList isVisble={isVisible} setIsVisible={setIsVisible} childToParent={childToParent} />}
            <TouchableOpacity onPress={() => setIsVisible(true)}>
                <Text style={styles.catTxt}>{selectedCat ? selectedCat?.categoryName : 'Select a Category'} </Text>
            </TouchableOpacity>

            <TextInput
            style={{borderBottomWidth:1, marginTop:10}}
                placeholder='Enter yout amount'
                onChangeText={(e) => { console.log(e) }}
            />

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