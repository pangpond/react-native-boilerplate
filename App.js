import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import { ReduxNetworkProvider, NetworkConsumer, NetworkProvider } from 'react-native-offline'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'

import { store, persistor } from './services/store'

import RootNavigator from './navigation/switch/RootNavigator'
import { ThemeContextProvider } from './context/ThemeContext'

import NoInternet from './screens/commons/NoInternet'
import Loader from './components/Loader'

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  }

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error)
  }

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true })
  }

  _loadResourcesAsync = async () =>
    Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png') /* eslint-disable-line global-require */,
        require('./assets/images/robot-prod.png') /* eslint-disable-line global-require */,
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') /* eslint-disable-line global-require */,
      }),
    ])

  render() {
    const { skipLoadingScreen } = this.props
    const { isLoadingComplete } = this.state

    if (!isLoadingComplete && !skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    }
    return (
      <ThemeContextProvider>
        <Provider store={store}>
          <PersistGate loading={<Loader />} persistor={persistor}>
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <ReduxNetworkProvider>
                <NetworkProvider>
                  <NetworkConsumer>
                    {({ isConnected }) => (isConnected ? <RootNavigator /> : <NoInternet />)}
                  </NetworkConsumer>
                </NetworkProvider>
              </ReduxNetworkProvider>
            </View>
          </PersistGate>
        </Provider>
      </ThemeContextProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
