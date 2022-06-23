import React from 'react'
import MarkerIcon from '../../assets/icons/marker-free-icon-font.svg'
import AngleLeftIcon from '../../assets/icons/angle-left-free-icon-font.svg'
import * as Components from './style'
import { TouchableOpacity } from 'react-native'

const LocationButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Components.Container>
        <Components.LeftContainer>
          <MarkerIcon width={12} height={12} />
        </Components.LeftContainer>
        <Components.Title>{title}</Components.Title>
        <Components.RightContainer>
          <AngleLeftIcon width={12} height={12} />
        </Components.RightContainer>
      </Components.Container>
    </TouchableOpacity>
  )
}

export default LocationButton
