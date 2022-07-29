import PropTypes from 'prop-types'
import React from 'react'
import { Text } from 'react-native'
import Image from 'react-native-image-progress'
import * as Progress from 'react-native-progress'
import { useTheme } from 'styled-components'
import * as Components from './style'
import CustomAvatar from '../CustomAvatar'

const SalonCard = ({ salon, imageSize, onDetailsPress, onReservePress }) => {
  if (!salon) {
    return <Text>A salon object is required.</Text>
  }

  const theme = useTheme()

  return (
    <Components.Container size={imageSize}>
      {/* Card image */}
      <Components.ImageContainer>
        <Image
          source={{ uri: salon.image }}
          indicator={Progress.Bar}
          indicatorProps={{
            size: 200,
            borderWidth: 1,
            color: theme.color.primary,
          }}
          style={{ width: imageSize, height: imageSize }}
        />
      </Components.ImageContainer>

      {/* Salon Logo */}
      <Components.LogoContainer>
        <CustomAvatar size={40} imageURL={salon.logo} />
      </Components.LogoContainer>

      {/* Fav Button */}
      <Components.FavButtonContainer></Components.FavButtonContainer>

      {/* Rating and Call to Action */}
      <Components.CTAContainer>
        <Components.RatingContainer>
          <Components.RatingIconContainer></Components.RatingIconContainer>
          <Components.RatingLabel>4.5</Components.RatingLabel>
        </Components.RatingContainer>

        <Text>CTA Button</Text>
      </Components.CTAContainer>

      {/* Name and Description */}
      <Components.Name>{salon.name}</Components.Name>
      <Components.Description>{salon.description}</Components.Description>
    </Components.Container>
  )
}

SalonCard.propTypes = {
  salon: PropTypes.object.isRequired,
  imageSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
}

SalonCard.defaultProps = {
  imageSize: 288,
}

export default SalonCard
