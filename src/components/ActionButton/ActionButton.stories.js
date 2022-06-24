import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import ActionButton from '.'
import CenterView from '../../../storybook/stories/CenterView'
import SearchIcon from '../../assets/icons/busqueda.svg'

storiesOf('ActionButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <ActionButton
      iconImage={<SearchIcon width={20} height={20} />}
      onPress={action('Button pressed')}
    />
  ))
