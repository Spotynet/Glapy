import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import CategoriesBarItem from '../CategoriesBarItem'
import * as Components from './style'

const CategoriesBar = ({ active, onPress, options }) => {
  const theme = useTheme()

  return (
    <Components.Container theme={theme}>
      <FlatList
        horizontal
        data={options}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPress(item.id)}>
            <CategoriesBarItem item={item} active={active === item.id} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <Components.Separator />}
        contentContainerStyle={{ paddingLeft: 15, paddingRight: 15 }}
        showsHorizontalScrollIndicator={false}
      />
    </Components.Container>
  )
}

export default CategoriesBar
