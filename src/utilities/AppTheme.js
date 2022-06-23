// import { useColorScheme } from 'react-native'

const AppTheme = () => {
  const baseColors = {
    primary: '#455a6d',
    secondary: '#9ce73d',
    background: '#f9f9f9',
    text: '#444',
  }

  const colorScheme = {
    light: { ...baseColors },
    dark: {
      ...baseColors,
      background: '#444',
      text: '#f9f9f9',
    },
  }
  return { color: colorScheme['light'] }
  // return { colors: colorScheme[useColorScheme()] }
}

export default AppTheme
