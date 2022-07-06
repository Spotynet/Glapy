import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import TabBarItem from '.'
import HomeIcon from '../../assets/icons/casa.svg'
import CenterView from '../CenterView'

storiesOf('TabBarItem', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <TabBarItem
      icon={<HomeIcon width={25} height={25} />}
      title="Inicio"
      onPress={action('Button pressed')}
    />
  ))
