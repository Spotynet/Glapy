import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import AngleLeftIcon from '../../assets/icons/angle-left-free-icon-font.svg'
import LocationArrowIcon from '../../assets/icons/location-arrow-icon.png'
import LocationIcon from '../../assets/icons/location-pin-icon.png'
import StarIcon from '../../assets/icons/estrella.png'
import { Image } from 'react-native'
import * as Components from './style'

const LocationButton = ({ title, subtitle, onPress }) => {
  const theme = useTheme()

  return (
    <TouchableOpacity onPress={onPress}>
      <Components.Container theme={theme}>
        <Components.LeftContainer>
          <Image source={LocationIcon} style={{ width: 26, height: 26 }} />
        </Components.LeftContainer>
        <Components.TitleGroup>
          <Components.Title>{title}</Components.Title>
          <Components.Subtitle>{subtitle}</Components.Subtitle>
        </Components.TitleGroup>
        <Components.RightContainer>
          <Image source={LocationArrowIcon} style={{ width: 16, height: 16 }} />
        </Components.RightContainer>
      </Components.Container>
    </TouchableOpacity>
  )
}

export default LocationButton
