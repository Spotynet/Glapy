import React from 'react'
import CalendarIcon from '../../assets/icons/calendario-mas.svg'
import HomeIcon from '../../assets/icons/casa.svg'
import MyPikIcon from '../../assets/icons/mypik-isotipo.svg'
import TabBarItem from '../TabBarItem'
import * as Components from './style'

const _Template = () => {
  return (
    <Components.Container>
      <Components.ItemsContainer>
        <TabBarItem
          icon={<HomeIcon width={25} height={25} />}
          title="Inicio"
          onPress={() => alert('Home button pressed.')}
        />
        <TabBarItem
          icon={<MyPikIcon width={24} height={30} />}
          title="Inicio"
          onPress={() => alert('MyPik button pressed.')}
        />
        <TabBarItem
          icon={<CalendarIcon width={25} height={25} />}
          title="Inicio"
          onPress={() => alert('Calendar button pressed.')}
        />
      </Components.ItemsContainer>
    </Components.Container>
  )
}

export default _Template
