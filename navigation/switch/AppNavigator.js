import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import SignInScreen from '../../screens/SignInScreen'
import AuthLoadingScreen from '../../screens/commons/AuthLoadingScreen'
import MainTabNavigator from '../MainTabNavigator'
import Drawer from '../Drawer'

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: Drawer,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
)
