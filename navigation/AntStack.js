import React from 'react'
import { createStackNavigator } from 'react-navigation'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import MainTabNavigator from './MainTabNavigator'
import MockupScreen from '../components/MockupScreen'
import LookAndFeel from '../constants/LookAndFeel'

const IndexScreen = ({ navigation }) => (
  <MockupScreen banner="Ant Index Screen" navigation={navigation} />
)

IndexScreen.navigationOptions = {
  ...LookAndFeel.defaultScreenNavigationOptions,
  headerTitle: 'Ant Index',
}

const DetailScreen = ({ navigation }) => (
  <MockupScreen banner="And Detail Screen" navigation={navigation} />
)

DetailScreen.navigationOptions = {
  ...LookAndFeel.defaultScreenNavigationOptions,
  headerTitle: 'Ant Detail',
}

const AntStack = createStackNavigator(
  {
    AntIndex: {
      screen: MainTabNavigator,
      navigationOptions: {
        header: null,
      },
    },
    AntDetail: { screen: DetailScreen },
  },
  {
    navigationOptions: {
      drawerLabel: 'นักเรียน',
      drawerIcon: ({ tintColor }) => (
        <MaterialIcons name="move-to-inbox" size={24} style={{ color: tintColor }} />
      ),
    },
  }
)

export default AntStack
