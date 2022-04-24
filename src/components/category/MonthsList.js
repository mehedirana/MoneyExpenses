import React from 'react'
import Modal from 'react-native-modal'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { categoryData, monthsData } from '../../dummy-data/rawData'
import { COLORS } from '../../styles.js/theme'


export const MonthsList = ({ childToParentMonths, visbleMonths, setVisibleMonths }) => {
    const handleMonth = (data) => {
        childToParentMonths(data)
        setVisibleMonths(false)
    }
    return (
        <Modal
            animationInTiming={400}
            animationOutTiming={800}
            swipeDirection="down"
            swipeThreshold={200}
            backdropOpacity={0.3}
            isVisible={visbleMonths}
            onBackdropPress={() => setVisibleMonths(false)}
            onRequestClose={() => setVisibleMonths(false)}
            hasBackdrop={true}

        >
            <View style={{ backgroundColor: COLORS.whitePure }}>
                {
                    monthsData.map((el) => {
                        return (
                            <TouchableOpacity onPress={() => handleMonth(el)} key={el.id}>
                                <Text style={styles.catTxt}>{el.name}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    catTxt: {
        fontSize: 15,
        color: COLORS.blackSolid,
        paddingLeft: 20,
        paddingVertical: 10

    }
})

