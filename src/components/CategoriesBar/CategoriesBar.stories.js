import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import CategoriesBar from '.'
import CenterView from '../CenterView'

const sampleCategories = [
  { id: 1, name: 'Todos' },
  { id: 2, name: 'Manicure & Pedicure' },
  { id: 3, name: 'Maquillaje' },
  { id: 4, name: 'Barbería' },
  { id: 5, name: 'Peluquería' },
  { id: 6, name: 'Spa' },
]

storiesOf('CategoriesBar', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <CategoriesBar
      active={2}
      options={sampleCategories}
      onPress={action('Category selected')}
    />
  ))
