import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Dimensions, View } from 'react-native'
import SalonCard from '.'
import CenterView from '../CenterView'

const sampleSalon = {
  image:
    'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  logo: 'https://insektauge.com/x/images/frog-prince.jpg',
  name: 'Tu salón',
  rating: '4.5',
  description: 'Descripción',
}

const { width } = Dimensions.get('window')
const padding = 30

storiesOf('SalonCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <SalonCard
      salon={sampleSalon}
      imageSize={width - padding * 2}
      onFavoritePress={() => alert('Favorite button pressed')}
      onReservePress={() => alert('Reserve button pressed')}
    />
  ))
