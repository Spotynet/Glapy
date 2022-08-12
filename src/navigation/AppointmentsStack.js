import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import Appointments from '../views/Appointments'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Appointments"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Appointments" component={Appointments} />
    </Stack.Navigator>
  )
}
