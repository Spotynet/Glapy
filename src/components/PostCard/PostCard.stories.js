import { storiesOf } from '@storybook/react-native'
import React from 'react'
import PostCard from '.'
import CenterView from '../CenterView'

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

storiesOf('PostCard', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <PostCard
      post={samplePost}
      onLikePress={() => alert('Like button pressed')}
      onSharePress={() => alert('Share button pressed')}
      onBookmarkPress={() => alert('Bookmark pressed')}
      onAuthorPress={() => alert('Author button pressed')}
      onCommentsPress={() => alert('Comments button pressed')}
    />
  ))
