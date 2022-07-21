import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from './categories/categoriesSlice'
import postsReducer from './posts/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    categories: categoriesReducer,
  },
})
