import React from 'react'
import * as Components from './style'
import { Image } from 'react-native'
import { useTheme } from 'styled-components'

const CategoriesBarItem = ({ active, item }) => {
  const theme = useTheme()

  return (
    <Components.Container>
      <Image
        source={active ? item.imageActive : item.image}
        resizeMode={'contain'}
        width={30}
        height={30}
      />
      <Components.Title theme={theme} active={active}>
        {item.name}
      </Components.Title>
      {/* {active && <Components.Indicator />} */}
    </Components.Container>
  )
}

export default CategoriesBarItem
