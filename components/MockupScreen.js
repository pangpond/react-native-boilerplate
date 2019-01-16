import React from 'react'
import { StatusBar, ScrollView, Button, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-navigation'

const MockupScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SafeAreaView style={styles.bannerContainer} forceInset={{ top: 'always', bottom: 'never' }}>
      <Text>{banner}</Text>
      <Button onPress={() => navigation.openDrawer()} title="Open drawer" />
      <Button onPress={() => navigation.navigate('Second')} title="Open other screen" />
      <Button onPress={() => navigation.navigate('Student')} title="Open Student screen" />
      <Button onPress={() => navigation.navigate('Parent')} title="Open Parent screen" />
      <Button onPress={() => navigation.navigate('Student')} title="Go back" />
    </SafeAreaView>
    <StatusBar barStyle="default" />
  </ScrollView>
)

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
  },
})

export default MockupScreen
