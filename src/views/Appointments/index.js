import React, { useState } from 'react'
import { Dimensions, FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import CategoriesBar from '../..//components/CategoriesBar'
import NavigationBar from '../../components/NavigationBar'
import SalonCard from '../../components/SalonCard'
import * as Components from './style'

const Home = ({ navigation }) => {
  const { data: posts } = useSelector(state => state.salons)
  const { data: categories } = useSelector(state => state.categories)
  const [activeCategoryId, setActiveCategoryId] = useState(1)

  const { width } = Dimensions.get('window')
  const padding = 30
  const cardWidth = width - padding * 2

  return (
    <Components.Container>
      {/* Navigation and Categories */}
      <Components.Header>
        <NavigationBar />
        <CategoriesBar
          options={categories}
          active={activeCategoryId}
          onPress={setActiveCategoryId}
        />
      </Components.Header>

      <Components.Body>
        <FlatList
          data={posts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <SalonCard
              salon={item}
              imageSize={cardWidth}
              onFavoritePress={() => alert('Favorite button pressed')}
              onReservePress={() => alert('Reserve button pressed')}
            />
          )}
          contentContainerStyle={{ padding }}
          ItemSeparatorComponent={() => <Components.Separator />}
        />
      </Components.Body>
    </Components.Container>
  )
}

export default Home
