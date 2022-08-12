import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components'
import StorybookUIRoot from '../storybook'
import TabNavigation from './navigation/TabNavigation'
import appTheme from './utilities/appTheme'

const App = () => {
  return (
    <ThemeProvider theme={appTheme(useColorScheme())}>
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>
    </ThemeProvider>
  )
}

const Storybook = () => {
  return (
    <ThemeProvider theme={appTheme(useColorScheme())}>
      <StorybookUIRoot />
    </ThemeProvider>
  )
}

export default App
// export default Storybook
