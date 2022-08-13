import React from 'react'
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import CustomAvatar from '../CustomAvatar'
import LocationButton from '../LocationButton'
import * as Components from './style'

const NavigationBar = () => {
  const theme = useTheme()

  return (
    <Components.Container theme={theme}>
      <SafeAreaView style={{ backgroundColor: theme.color.background }}>
        <Components.BarContainer>
          {/* Location button */}
          <Components.LocationButtonContainer>
            <LocationButton
              title="Mi ubicación"
              subtitle="Orizaba 154, Roma Nte, Cuauhtémoc, 06700, CDMX"
              onPress={() => alert('Location button pressed')}
            />
          </Components.LocationButtonContainer>

          {/* Avatar */}
          <Components.AvatarContainer>
            <TouchableOpacity onPress={() => alert('Profile button pressed')}>
              <CustomAvatar
                size={40}
                imageURL="https://loremflickr.com/120/120/girl"
              />
            </TouchableOpacity>
          </Components.AvatarContainer>
        </Components.BarContainer>
      </SafeAreaView>
    </Components.Container>
  )
}

export default NavigationBar
