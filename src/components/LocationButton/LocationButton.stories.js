import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import LocationButton from '.'
import CenterView from '../../../storybook/stories/CenterView'

storiesOf('LocationButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <LocationButton title="Ubicación" onPress={action('Button pressed')} />
  ))
