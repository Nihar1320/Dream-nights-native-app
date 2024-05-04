import React from 'react';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './Components/Header';
import ImageCards from './Components/ImageCards';
import PlainCards from './Components/PlainCards';
import SliderCards from './Components/SliderCards';
import Footer from './Components/Footer';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <View style={styles.cardsContainer}>
          <Text style={styles.headingText}>Countries</Text>
          <PlainCards />
          <Text style={styles.headingText}>Cities</Text>
          <SliderCards />
          <Text style={styles.headingText}>Destinations</Text>
          <ImageCards />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    padding: 10,
    margin: 8
  },
  headingText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10
  }
})

export default App;