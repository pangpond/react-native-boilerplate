import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

// import HomeScreen from '../screens/HomeScreen'
import SignInScreen from '../screens/SignInScreen'
import AuthLoadingScreen from '../screens/AuthLoadingScreen'
import MainTabNavigator from './MainTabNavigator'

// const MainStack = createStackNavigator({ Home: HomeScreen })

const AuthStack = createStackNavigator({ SignIn: SignInScreen })

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: MainTabNavigator,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
)
