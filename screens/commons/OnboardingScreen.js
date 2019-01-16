/* global __DEV__ */
import React from 'react'
import { AsyncStorage, ScrollView, View, Image, StyleSheet, Text, Button } from 'react-native'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Onboarding',
  }

  _boardingAsync = async () => {
    await AsyncStorage.setItem('onBoarded', 'true')
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../../assets/images/robot-dev.png') /* eslint-disable-line global-require */
                  : require('../../assets/images/robot-prod.png') /* eslint-disable-line global-require */
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            <Text>Onboarding Component here</Text>
            <Button title="Skip" onPress={this._boardingAsync} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
})
