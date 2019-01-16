import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import AppNavigator from './AppNavigator'
import OnboardingScreen from '../../screens/commons/OnboardingScreen'
import AppLoadingScreen from '../../screens/commons/AppLoadingScreen'

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
