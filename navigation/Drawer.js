import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator, SafeAreaView, DrawerItems } from 'react-navigation'

import AntStack from './AntStack'

import Colors from '../constants/Colors'

const CustomDrawerContentComponent = (props) => (
  <ScrollView style={{ backgroundColor: Colors.drawerBackground }}>
    <SafeAreaView style={[styles.container]} forceInset={{ top: 'always', horizontal: 'never' }}>
      <Text>0855198189</Text>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
)

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
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeBackgroundColor: Colors.drawerBackgroundActive,
      // itemStyle: { color: Colors.txtWhite },
      // iconContainerStyle: { color: Colors.txtWhite },
      labelStyle: { color: Colors.txtWhite },
      // activeTintColor: { color: Colors.txtWhite },
      // inactiveTintColor: { color: Colors.txtWhite },
    },
  }
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Drawer
