import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const SliderCards = () => {
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.card1]}>
                <Text style={styles.text}>Indore</Text>
            </View>
            <View style={[styles.card, styles.card2]}>
                <Text style={styles.text}>Delhi</Text>
            </View>
            <View style={[styles.card, styles.card3]}>
                <Text style={styles.text}>Chennai</Text>
            </View>
            <View style={[styles.card, styles.card4]}>
                <Text style={styles.text}>Kolkata</Text>
            </View>
            <View style={[styles.card, styles.card1]}>
                <Text style={styles.text}>Mysore</Text>
            </View>
            <View style={[styles.card, styles.card2]}>
                <Text style={styles.text}>Kochi</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
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
        marginRight: 10,
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
    card4: {
        backgroundColor: '#7EA1FF'
    },
});

export default SliderCards;