import { createSlice } from '@reduxjs/toolkit'

export const salonPostsSlice = createSlice({
  name: 'posts',
  initialState: {
    data: [
      {
        id: 1,
        images: [
          'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
        ],
        logo: 'https://insektauge.com/x/images/frog-prince.jpg',
        name: 'Salón de Prueba 1',
        rating: '4.5',
        description:
          'Lorem ipsum dolor sit amet quam vivamus elit nulla aliqua.',
      },
      {
        id: 2,
        images: [
          'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
        ],
        logo: 'https://insektauge.com/x/images/headshot.jpg',
        name: 'Tu Salón de Prueba 2',
        rating: '4.7',
        description:
          'Lorem ipsum dolor sit amet quam vivamus elit nulla aliqua.',
      },
      {
        id: 3,
        images: [
          'https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
          'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
          'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        ],
        logo: 'https://insektauge.com/x/images/past-glory.jpg',
        name: 'Otro Salón de Prueba 3',
        rating: '4.3',
        description:
          'Lorem ipsum dolor sit amet quam vivamus elit nulla aliqua.',
      },
    ],
  },
  reducers: {},
})

export default salonPostsSlice.reducer
