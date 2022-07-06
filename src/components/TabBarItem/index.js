import React from 'react'
import { TouchableOpacity } from 'react-native'
import * as Components from './style'

const TabBarItem = ({ icon, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Components.Container>
        <Components.IconContainer>{icon}</Components.IconContainer>
        <Components.Title>{title}</Components.Title>
      </Components.Container>
    </TouchableOpacity>
  )
}

export default TabBarItem
