import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import Styles from './Styles'
import Colors from './Colors'

const defaultTabBarOptions = {
  activeTintColor: Colors.tabIconSelected,
}

const defaultScreenNavigationOptions = {
  headerStyle: { backgroundColor: Colors.txtMainRed },
  headerTintColor: Colors.tintColor,
}

const drawerMenu = ({ navigation }) => ({
  headerLeft: () => (
    <MaterialIcons
      onPress={() => navigation.openDrawer()}
      name="menu"
      size={24}
      style={{ color: Colors.tintColor, paddingLeft: 10 }}
    />
  ),
})

export default {
  defaultTabBarOptions,
  defaultScreenNavigationOptions,
  drawerMenu,
  Styles,
}
