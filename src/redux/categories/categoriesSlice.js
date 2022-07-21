import { createSlice } from '@reduxjs/toolkit'

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    data: [
      { id: 1, name: 'Todos' },
      { id: 2, name: 'Manicure & Pedicure' },
      { id: 3, name: 'Maquillaje' },
      { id: 4, name: 'Barbería' },
      { id: 5, name: 'Peluquería' },
      { id: 6, name: 'Spa' },
    ],
  },
  reducers: {},
})

export default categoriesSlice.reducer
