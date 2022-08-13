import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as React from 'react'
import { Button, SafeAreaView } from 'react-native'
import Appointments from '../views/Appointments'
import Home from '../views/Home'

const Stack = createNativeStackNavigator()

const SomeView = ({ navigation }) => {
  return (
    <SafeAreaView style={{backgroundColor: theme.color.background}} >
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  )
}

const Unauthorized = () => {
  return (
    <Stack.Navigator initialRouteName="Appointments">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Appointments"
        component={Appointments}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SomeView"
        component={SomeView}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default Unauthorized
