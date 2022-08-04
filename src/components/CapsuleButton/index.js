import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import * as Components from './style'

const CapsuleButton = ({ title, icon, onPress }) => {
  const theme = useTheme()

  return (
    <TouchableOpacity onPress={onPress}>
      <Components.Container
        bgColor={theme.color.primary}
        textColor={theme.color.primary}
      >
        <Components.IconContainer>{icon}</Components.IconContainer>
        <Components.Title>{title}</Components.Title>
      </Components.Container>
    </TouchableOpacity>
  )
}

export default CapsuleButton
