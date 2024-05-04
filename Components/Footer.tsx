import { View, StyleSheet, Image, Text } from 'react-native'
import React from 'react'

const Footer = () => {
    const ownersData = [
        {
            name: "Nihar Ranjan Hota",
            imageUrl: "https://media.licdn.com/dms/image/D4D03AQFBYHAMryS88Q/profile-displayphoto-shrink_400_400/0/1677439186826?e=1720051200&v=beta&t=Qp14R0tCrUbPz1AvtzoAx6geHCLJ0TlTwriZhihKXOc",
            designation: "MERN Developer"
        },
        {
            name: "Parag Jain",
            imageUrl: "https://media.licdn.com/dms/image/D4D35AQG4Lao_4qC6OQ/profile-framedphoto-shrink_100_100/0/1712946907773?e=1714939200&v=beta&t=YCNLJJeBaoZn9M9LURzeDzhJikM8QLKElrVGutQE4FE",
            designation: "Full Stack Developer"
        },
        {
            name: "Aaryan Sinha",
            imageUrl: "https://media.licdn.com/dms/image/D4D03AQEVMrUsrlgmqw/profile-displayphoto-shrink_400_400/0/1705222921602?e=1720051200&v=beta&t=lseIdPT1jL4pGfJTfFMz_AaURiFcYiTUAEN0oTF3sbk",
            designation: "Full Stack Developer"
        },
    ]
    return (
        <View style={styles.container}>
            {
                ownersData.map((owner, index) => (
                    <View key={index} style={styles.ownerContainer}>
                        <Image source={{ uri: owner.imageUrl }} style={styles.imageStyle} />
                        <Text style={styles.textStyle}>{owner.name}</Text>
                        <Text style={styles.textStyle}>{owner.designation}</Text>
                    </View>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#40A2E3',
        minHeight: 60,
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        gap: 10,
        alignItems: 'center'
    },
    ownerContainer : {
       flex : 1,
       justifyContent: 'center',
       alignItems: 'center'
    },
    imageStyle: {
        height: 60,
        width: 60,
        borderRadius: 50
    },
    textStyle: {
        fontWeight: 'bold',
        color: '#FFF'
    }
})

export default Footer