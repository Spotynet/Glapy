// import { useColorScheme } from 'react-native'

const AppTheme = () => {
  const baseColors = {
    primary: '#ff003a',
    secondary: '#6bf35',
    background: '#f9f9f9',
    text: '#000',
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
