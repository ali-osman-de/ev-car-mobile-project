import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import HeroContent from './HeroContent'
import AICarDreamer from './AICarDreamer'
import Categories from './Categories'
import ChargerMap from './ChargerMap'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <HeroContent />
        <AICarDreamer />
        <Categories />
        <ChargerMap />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  scrollView: {
    marginBottom: 100
  }

})