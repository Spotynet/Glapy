import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categories/categoriesSlice'
import postsReducer from './posts/postsSlice'
import salonPostsReducer from './salon-posts/salonPostsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesReducer,
    salons: salonPostsReducer,
  },
})
