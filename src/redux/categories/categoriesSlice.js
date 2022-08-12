import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [
      {
        id: 1,
        name: 'Todos',
        image: require('../../assets/icons/all-category-icon.png'),
        imageActive: require('../../assets/icons/all-category-icon-active.png'),
      },
      {
        id: 2,
        name: 'Manicure & Pedicure',
        image: require('../../assets/icons/manicure-category-icon.png'),
        imageActive: require('../../assets/icons/manicure-category-icon-active.png'),
      },
      {
        id: 3,
        name: 'Make Up',
        image: require('../../assets/icons/makeup-category-icon.png'),
        imageActive: require('../../assets/icons/makeup-category-icon-active.png'),
      },
      {
        id: 4,
        name: 'Barbería',
        image: require('../../assets/icons/barbershop-category-icon.png'),
        imageActive: require('../../assets/icons/barbershop-category-icon-active.png'),
      },
      {
        id: 5,
        name: 'Estética',
        image: require('../../assets/icons/salon-category-icon.png'),
        imageActive: require('../../assets/icons/salon-category-icon-active.png'),
      },
      {
        id: 6,
        name: 'Spa',
        image: require('../../assets/icons/spa-category-icon.png'),
        imageActive: require('../../assets/icons/spa-category-icon-active.png'),
      },
      {
        id: 7,
        name: 'Tatoo',
        image: require('../../assets/icons/tatoo-category-icon.png'),
        imageActive: require('../../assets/icons/tatoo-category-icon-active.png'),
      },
    ],
  },
  reducers: {},
})

export default categoriesSlice.reducer
