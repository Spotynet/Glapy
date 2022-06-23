import PropTypes from 'prop-types'
import React from 'react'
import * as Components from './style'
import Image from 'react-native-image-progress'
import * as Progress from 'react-native-progress'
import { Avatar } from '@rneui/themed'
import { useTheme } from 'styled-components'

const GlapyAvatar = ({ size, imageURL, anagram }) => {
  const theme = useTheme()

  return (
    <Components.Container>
      <Avatar
        size={size}
        rounded
        title={anagram}
        threshold={0}
        ImageComponent={() => (
          <Image
            source={{ uri: imageURL }}
            indicator={Progress.Pie}
            indicatorProps={{
              size: size * 0.9,
              borderWidth: 0,
              color: theme.color.primary,
              unfilledColor: 'rgba(200, 200, 200, 0.2)',
            }}
            style={{
              width: size,
              height: size,
              backgroundColor: theme.color.background,
              overflow: 'hidden',
            }}
          />
        )}
      />
    </Components.Container>
  )
}

GlapyAvatar.propTypes = {
  size: PropTypes.number.isRequired,
  imageURL: PropTypes.string,
  anagram: PropTypes.string,
}

GlapyAvatar.defaultProps = {
  size: 24,
  imageURL: undefined,
  anagram: undefined,
}

export default GlapyAvatar
