import React from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import * as Components from './style'
import CategoriesBarItem from '../CategoriesBarItem'

const CategoriesBar = ({ active, onPress, options }) => {
  return (
    <Components.Container>
      <FlatList
        horizontal
        data={options}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={onPress}>
            <CategoriesBarItem title={item.name} active={active === item.id} />
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
