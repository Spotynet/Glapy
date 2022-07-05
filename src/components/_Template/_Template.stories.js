import { storiesOf } from '@storybook/react-native'
import React from 'react'
import _Template from '.'
import CenterView from '../CenterView'

storiesOf('_Template', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <_Template />)
