import { View, ScrollView, StyleSheet, Image, Button, Linking } from 'react-native';
import React from 'react';

const ImageCards = () => {
    const openWebsite = (websiteLink: string)  => {
        Linking.openURL(websiteLink);
    }
    return (
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.card1]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D',
                    }}
                    style={styles.imageStyle}
                />
                <Button
                    title="Know more"
                    onPress={() => openWebsite('https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D')}
                />
            </View>
            <View style={[styles.card, styles.card1]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D',
                    }}
                    style={styles.imageStyle}
                />
                <Button
                    title="Know more"
                    onPress={() => openWebsite('https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D')}
                />
            </View>
            <View style={[styles.card, styles.card1]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1543877087-ebf71fde2be1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D',
                    }}
                    style={styles.imageStyle}
                />
                <Button
                    title="Know more"
                    onPress={() => openWebsite('https://images.unsplash.com/photo-1543877087-ebf71fde2be1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D')}
                />
            </View>
            <View style={[styles.card, styles.card1]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D',
                    }}
                    style={styles.imageStyle}
                />
                <Button
                    title="Know more"
                    onPress={() => openWebsite('https://images.unsplash.com/photo-1418489098061-ce87b5dc3aee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D')}
                />
            </View>
            <View style={[styles.card, styles.card1]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D',
                    }}
                    style={styles.imageStyle}
                />
                <Button
                    title="Know more"
                    onPress={() => openWebsite('https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D')}
                />
            </View>
            <View style={[styles.card, styles.card1]}>
                <Image
                    source={{
                        uri: 'https://images.unsplash.com/photo-1431411207774-da3c7311b5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D',
                    }}
                    style={styles.imageStyle}
                />
                <Button
                    title="Know more"
                    onPress={() => openWebsite('https://images.unsplash.com/photo-1431411207774-da3c7311b5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyYWx8ZW58MHx8MHx8fDA%3D')}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
    },
    card: {
        height: 200,
        width: 200,
        flex: 1,
        marginRight: 10,
        elevation: 3,
        borderRadius: 7,
    },
    card1: {
        backgroundColor: '#F6F5F2',
    },
    imageStyle: {
        height: 170,
        objectFit: 'cover',
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7
    },
});

export default ImageCards;
