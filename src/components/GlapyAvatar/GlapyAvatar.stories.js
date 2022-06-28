import { storiesOf } from '@storybook/react-native'
import React from 'react'
import GlapyAvatar from '.'

import CenterView from '../CenterView'

storiesOf('GlapyAvatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <GlapyAvatar
      size={100}
      imageURL="https://insektauge.com/x/images/frog-prince.jpg"
    />
  ))
