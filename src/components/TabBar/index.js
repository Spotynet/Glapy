import React from 'react'
import { SafeAreaView } from 'react-native'
import CalendarIcon from '../../assets/icons/calendario-mas.svg'
import HomeIcon from '../../assets/icons/casa.svg'
import MyPikIcon from '../../assets/icons/mypik-isotipo.svg'
import TabBarItem from '../TabBarItem'
import * as Components from './style'

const TabBar = () => {
  return (
    <Components.Container>
      <SafeAreaView style={{backgroundColor: theme.color.background}}>
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
      </SafeAreaView>
    </Components.Container>
  )
}

export default TabBar
