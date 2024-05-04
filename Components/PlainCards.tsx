import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlainCards = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.card, styles.card1]}>
                <Text style={styles.text}>India</Text>
            </View>
            <View style={[styles.card, styles.card2]}>
                <Text style={styles.text}>Australia</Text>
            </View>
            <View style={[styles.card, styles.card3]}>
                <Text style={styles.text}>Ukraine</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        marginTop: 5
    },
    text : {
        fontWeight: 'bold'
    },
    card: {
        height: 100,
        width: 100,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7
    },
    card1: {
        backgroundColor: '#5BBCFF'
    },
    card2: {
        backgroundColor: '#FFFAB7'
    },
    card3: {
        backgroundColor: '#FFD1E3'
    },
});

export default PlainCards;