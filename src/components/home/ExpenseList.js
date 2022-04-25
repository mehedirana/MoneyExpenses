import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native'
import { COLORS } from '../../styles.js/theme'


export const ExpenseList = ({ data }) => {
    const RenderList = ({ item, index }) => {
        return (
            <View style={styles.card}>
                <Text style={styles.catTxt} >{item?.category?.categoryName}</Text>
                <Text>{item?.expenseAmount}</Text>
                <View style={{ flexDirection: 'row', justifyContent:'space-evenly' }}>
                    <TouchableOpacity><Text style={{ color: COLORS.red }}>Delete</Text></TouchableOpacity>
                    <TouchableOpacity><Text style={{ color: COLORS.primary }}>Edit</Text></TouchableOpacity>

                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            {
                data && <FlatList
                    data={data}
                    renderItem={RenderList}
                    key={(item) => item.expenseId}
                    ItemSeparatorComponent={()=> <View style={{height:20}}/>}
                />
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.whitePure,
        marginTop:20
    },
    card: {
        marginHorizontal: 20, 
        // borderRadius: 11,
         shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,

        elevation: 2,
        padding:10
    },
    catTxt: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black50
    },
    amountTxt: {

    }


})