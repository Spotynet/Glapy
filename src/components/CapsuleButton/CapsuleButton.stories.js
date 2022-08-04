import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Image } from 'react-native'
import CapsuleButton from '.'
import ClockIcon from '../../assets/icons/time-add-free-icon-font.png'
import CenterView from '../CenterView'

storiesOf('CapsuleButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <CapsuleButton
      title="Reservar"
      icon={<Image source={ClockIcon} width={15} height={15} />}
      onPress={() => alert('Button Pressed')}
    />
  ))
