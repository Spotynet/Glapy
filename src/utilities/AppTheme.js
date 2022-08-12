const appTheme = scheme => {
  const baseColors = {
    primary: '#ff003a',
    secondary: '#2946DF',
    background: '#fff',
    backgroundAlt: '#f9f9f9',
    text: '#000',
    textAlt: '#242424',
  }

  const colorScheme = {
    light: {
      ...baseColors,
    },
    dark: {
      ...baseColors,
      background: '#353535',
      text: '#f9f9f9',
    },
  }

  const fonts = {
    primary: 'LeagueSpartan-Regular',
  }

  return { color: colorScheme[scheme], font: fonts }
}

export default appTheme
