import React, { useState } from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'
import CategoriesBar from '../..//components/CategoriesBar'
import NavigationBar from '../../components/NavigationBar'
import PostCard from '../../components/PostCard'
import TabBar from '../../components/TabBar'
import * as Components from './style'

const Home = ({ navigation }) => {
  const { data: posts } = useSelector(state => state.posts)
  const { data: categories } = useSelector(state => state.categories)
  const [activeCategoryId, setActiveCategoryId] = useState(1)

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
            <PostCard
              post={item}
              onLikePress={() => alert('Like button pressed')}
              onSharePress={() => alert('Share button pressed')}
              onBookmarkPress={() => alert('Bookmark pressed')}
              onAuthorPress={() => alert('Author button pressed')}
              onCommentsPress={() => alert('Comments button pressed')}
            />
          )}
          contentContainerStyle={{ paddingBottom: 96 }}
        />

        <Components.TabBarContainer>
          <TabBar />
        </Components.TabBarContainer>
      </Components.Body>
    </Components.Container>
  )
}

export default Home
