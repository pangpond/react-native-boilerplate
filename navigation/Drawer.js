import React from 'react'
import PropTypes from 'prop-types'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation'

import AntStack from './AntStack'
import Colors from '../constants/Colors'
import { withThemeContext } from '../context/ThemeContext'

const CustomDrawerContentComponent = (props) => {
  const { colors } = props

  return (
    <ScrollView style={{ backgroundColor: colors.drawerBackground }}>
      <SafeAreaView style={[styles.container]} forceInset={{ top: 'always', horizontal: 'never' }}>
        <Text>Username</Text>
        <DrawerItems {...props} />
      </SafeAreaView>
    </ScrollView>
  )
}

CustomDrawerContentComponent.propTypes = {
  colors: PropTypes.object.isRequired /* eslint-disable-line */,
}

const Drawer = createDrawerNavigator(
  {
    Ant: {
      path: '/',
      screen: AntStack,
    },
    Bird: {
      path: '/bird',
      screen: AntStack,
    },
    Cat: {
      path: '/cat',
      screen: AntStack,
    },
  },
  {
    initialRouteName: 'Ant',
    contentComponent: withThemeContext(CustomDrawerContentComponent),
    contentOptions: {
      activeBackgroundColor: Colors.drawerBackgroundActive,
      itemStyle: { color: Colors.txtWhite },
      iconContainerStyle: { color: Colors.drawerBackgroundActive },
      activeTintColor: Colors.txtWhite,
    },
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Drawer
