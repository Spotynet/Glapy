import { storiesOf } from '@storybook/react-native'
import React from 'react'
import TabBar from '.'
import CenterView from '../CenterView'

storiesOf('TabBar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <TabBar />)
