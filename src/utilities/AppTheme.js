const appTheme = scheme => {
  const baseColors = {
    primary: '#ff003a',
    secondary: '#2946DF',
    background: '#fff',
    backgroundAlt: '#f1f1f1',
    text: '#000',
    textAlt: '#3A3A3A',
  }

  const colorScheme = {
    light: {
      ...baseColors,
    },
    dark: {
      ...baseColors,
      background: '#353535',
      backgroundAlt: '#404040',
      text: '#f9f9f9',
      textAlt: '#C4C4C4',
    },
  }

  const fonts = {
    primary: 'LeagueSpartan-Regular',
  }

  return { color: colorScheme[scheme], font: fonts }
}

export default appTheme
