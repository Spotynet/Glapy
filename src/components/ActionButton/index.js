import React from 'react'
import * as Components from './style'
import { TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

const ActionButton = ({ iconImage, onPress, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Components.Container>{iconImage}</Components.Container>
    </TouchableOpacity>
  )
}

ActionButton.propTypes = {
  iconImage: PropTypes.node.isRequired,
}

export default ActionButton
