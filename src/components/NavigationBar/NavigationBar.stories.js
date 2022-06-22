import { action } from '@storybook/addon-actions'

import { storiesOf } from '@storybook/react-native'
import React from 'react'
import NavigationBar from '.'

import CenterView from '../../../storybook/stories/CenterView'

storiesOf('NavigationBar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <NavigationBar />)
