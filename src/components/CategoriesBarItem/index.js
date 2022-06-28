import React from 'react'
import * as Components from './style'

const CategoriesBarItem = ({ active, title }) => {
  return (
    <Components.Container>
      <Components.Title>{title}</Components.Title>
      {active && <Components.Indicator />}
    </Components.Container>
  )
}

export default CategoriesBarItem
