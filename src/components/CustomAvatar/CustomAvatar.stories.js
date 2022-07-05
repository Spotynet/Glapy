import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CustomAvatar from '.'

import CenterView from '../CenterView'

storiesOf('CustomAvatar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <CustomAvatar
      size={100}
      imageURL="https://insektauge.com/x/images/frog-prince.jpg"
    />
  ))
