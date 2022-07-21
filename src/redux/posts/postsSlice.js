import { createSlice } from '@reduxjs/toolkit'

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        caption: 'Caption example',
        likes: '2,048',
        date: '20 / 05 / 22',
        author: {
          name: 'Frog Prince',
          avatar: 'https://insektauge.com/x/images/frog-prince.jpg',
        },
      },
      {
        id: 2,
        image:
          'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        caption: 'Caption example',
        likes: '2,048',
        date: '20 / 05 / 22',
        author: {
          name: 'Frog Prince',
          avatar: 'https://insektauge.com/x/images/frog-prince.jpg',
        },
      },
    ],
  },
  reducers: {},
})

export default postsSlice.reducer
