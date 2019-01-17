import React from 'react'
import PropTypes from 'prop-types'
import Colors from '../constants/Colors'

const ThemeContext = React.createContext({})

const ThemeContextProvider = ({ children }) => (
  <ThemeContext.Provider value={Colors}>{children}</ThemeContext.Provider>
)
ThemeContextProvider.propTypes = {
  children: PropTypes.object.isRequired /* eslint-disable-line */,
}

const withThemeContext = (ChildComponent) => (props) => (
  <ThemeContext.Consumer>
    {(colors) => <ChildComponent {...props} colors={colors} />}
  </ThemeContext.Consumer>
)

export { ThemeContextProvider, withThemeContext }
