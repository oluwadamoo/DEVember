import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

type DayListItem = {
    day: number;
}
const DayListItem = ({ day }: DayListItem) => {
    return (
        <Link href={`/day${day}`} asChild>
            <TouchableOpacity style={styles.box}>
                <Text style={styles.text}>{day}</Text>

            </TouchableOpacity>
        </Link>


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
        fontSize: 75,
        fontFamily: 'AmaticBold'
    }
})
export default DayListItem