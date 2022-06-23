import React from 'react'
import GlapyAvatar from '../GlapyAvatar'
import LocationButton from '../LocationButton'
import * as Components from './style'

const NavigationBar = () => {
  return (
    <Components.Container>
      {/* Avatar */}
      <Components.AvatarContainer>
        <GlapyAvatar
          size={40}
          // imageURL="https://loremflickr.com/120/120/dog"
          imageURL="https://insektauge.com/x/images/frog-prince.jpg"
        />
      </Components.AvatarContainer>

      {/* Location button */}
      <Components.LocationButtonContainer>
        <LocationButton
          title="Ubicación"
          onPress={() => alert('Location button pressed')}
        />
      </Components.LocationButtonContainer>

      <Components.Spacer />

      {/* Actions */}
      <Components.ActionsContainer></Components.ActionsContainer>
    </Components.Container>
  )
}

export default NavigationBar
