import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textContent}>Dream Nights</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#40A2E3',
        height: 75,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textContent: {
        fontWeight: 'bold',
        fontFamily: 'roboto',
        color: "#FFF6E9",
        fontSize: 25
    }
})

export default Header