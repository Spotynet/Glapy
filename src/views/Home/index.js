import React, { useState } from 'react'
import { Button, FlatList } from 'react-native'
import CategoriesBar from '../..//components/CategoriesBar'
import NavigationBar from '../../components/NavigationBar'
import PostCard from '../../components/PostCard'
import TabBar from '../../components/TabBar'
import * as Components from './style'

const sampleCategories = [
  { id: 1, name: 'Todos' },
  { id: 2, name: 'Manicure & Pedicure' },
  { id: 3, name: 'Maquillaje' },
  { id: 4, name: 'Barbería' },
  { id: 5, name: 'Peluquería' },
  { id: 6, name: 'Spa' },
]

const samplePost = {
  image:
    'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
  caption: 'Caption example',
  likes: '2,048',
  date: '20 / 05 / 22',
  author: {
    name: 'Frog Prince',
    avatar: 'https://insektauge.com/x/images/frog-prince.jpg',
  },
}

const Home = ({ navigation }) => {
  const [activeCategoryId, setActiveCategoryId] = useState(1)

  return (
    <Components.Container>
      {/* Navigation and Categories */}
      <Components.Header>
        <NavigationBar />
        <CategoriesBar
          options={sampleCategories}
          active={activeCategoryId}
          onPress={setActiveCategoryId}
        />
      </Components.Header>

      <Components.Body>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PostCard
              post={samplePost}
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
          {/* <Button
            title="Go to Some View"
            onPress={() => navigation.navigate('SomeView')}
          /> */}
        </Components.TabBarContainer>
      </Components.Body>
    </Components.Container>
  )
}

export default Home
