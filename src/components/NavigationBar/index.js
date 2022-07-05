import React from 'react'
import ActionButton from '../ActionButton'
import CustomAvatar from '../CustomAvatar'
import LocationButton from '../LocationButton'
import * as Components from './style'
import SearchIcon from '../../assets/icons/busqueda.svg'
import AddIcon from '../../assets/icons/agregar.svg'
import BoltIcon from '../../assets/icons/tornillo.svg'

const NavigationBar = () => {
  return (
    <Components.Container height={88}>
      <Components.BarContainer>
        {/* Avatar */}
        <Components.AvatarContainer>
          <CustomAvatar
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
        <Components.ActionsContainer>
          <ActionButton
            iconImage={<SearchIcon width={20} height={20} />}
            onPress={() => alert('Search button pressed')}
            style={{ marginRight: 12 }}
          />
          <ActionButton
            iconImage={<AddIcon width={20} height={20} />}
            onPress={() => alert('Add button pressed')}
            style={{ marginRight: 12 }}
          />
          <ActionButton
            iconImage={<BoltIcon width={20} height={20} />}
            onPress={() => alert('Button pressed')}
          />
        </Components.ActionsContainer>
      </Components.BarContainer>
    </Components.Container>
  )
}

export default NavigationBar
