import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import StorybookUIRoot from '../storybook'
import Unauthorized from './navigation/Unauthorized'
import TabNavigation from './navigation/TabNavigation'
import AppTheme from './utilities/AppTheme'

const App = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </ThemeProvider>
  )
}

const Storybook = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <StorybookUIRoot />
    </ThemeProvider>
  )
}

export default App;
// export default Storybook
