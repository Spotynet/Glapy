import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Dimensions, View } from 'react-native'
import SalonCard from '.'
import CenterView from '../CenterView'

const sampleSalon = {
  image:
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  name: 'Tu salón',
  likes: '1690',
  distance: '560m',
}

const { width } = Dimensions.get('window')
const padding = 30

storiesOf('SalonCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <SalonCard
        salon={sampleSalon}
        imageSize={width - padding * 2}
        onDetailsPress={() => alert('Details button pressed')}
        onReservePress={() => alert('Reserve button pressed')}
      />
  ))
