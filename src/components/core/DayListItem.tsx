import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type DayListItem = {
    day: number;
}
const DayListItem = ({ day }: DayListItem) => {
    return (
        <View style={styles.box}>
            <Text style={styles.text}>{day}</Text>
        </View>

    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#F9EDE3',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#9B4521',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        aspectRatio: 1
    },
    text: {
        color: '#9B4521',
        fontSize: 70
    }
})
export default DayListItem