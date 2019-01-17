import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Loader = () => (
  <View style={styles.container}>
    <Text style={styles.text}>กำลังประมวลผล...</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    opacity: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  text: {
    padding: 10,
    fontSize: 16,
    alignSelf: 'center',
    color: 'black',
  },
})

export default Loader
