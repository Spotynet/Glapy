import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import { Image } from 'react-native'
import AppointmentsStack from './AppointmentsStack'

import HomeIconActive from '../assets/icons/home-tab-icon-active.png'
import HomeIcon from '../assets/icons/home-tab-icon.png'
import MapIconActive from '../assets/icons/map-tab-icon-active.png'
import MapIcon from '../assets/icons/map-tab-icon.png'
import SearchIconActive from '../assets/icons/search-tab-icon-active.png'
import SearchIcon from '../assets/icons/search-tab-icon.png'

const Tab = createBottomTabNavigator()

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'MapTab':
              return focused ? (
                <Image source={MapIconActive} width={30} height={30} />
              ) : (
                <Image source={MapIcon} width={25} height={25} />
              )
            case 'HomeTab':
              return focused ? (
                <Image source={HomeIconActive} width={30} height={30} />
              ) : (
                <Image source={HomeIcon} width={25} height={25} />
              )
            case 'SearchTab':
              return focused ? (
                <Image source={SearchIconActive} width={30} height={30} />
              ) : (
                <Image source={SearchIcon} width={25} height={25} />
              )
            default:
              return <Image source={MapIcon} width={25} height={25} />
          }
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarLabelStyle: {
          fontFamily: 'LeagueSpartan-Semibold',
          fontSize: 9,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="MapTab"
        component={AppointmentsStack}
        options={{ title: 'Vista de Mapa' }}
      />
      <Tab.Screen
        name="HomeTab"
        component={AppointmentsStack}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="SearchTab"
        component={AppointmentsStack}
        options={{ title: 'Buscar' }}
      />
    </Tab.Navigator>
  )
}
