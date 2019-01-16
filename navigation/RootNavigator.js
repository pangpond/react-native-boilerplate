import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AppNavigator from './AppNavigator'
import OnboardingScreen from '../screens/OnboardingScreen'
import AppLoadingScreen from '../screens/AppLoadingScreen'

export default createAppContainer(
  createSwitchNavigator(
    {
      AppLoading: AppLoadingScreen,
      Onboarding: OnboardingScreen,
      App: AppNavigator,
    },
    {
      initialRouteName: 'AppLoading',
    }
  )
)
