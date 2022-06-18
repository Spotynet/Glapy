import * as React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../views/Home'
import { Button, SafeAreaView } from 'react-native'

const Stack = createNativeStackNavigator()

const SomeView = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  )
}

const Unauthorized = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
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
