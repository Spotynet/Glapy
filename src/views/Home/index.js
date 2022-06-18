import React from 'react'
import { Button, SafeAreaView, Text } from 'react-native'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button
        title="Go to Some View"
        onPress={() => navigation.navigate('SomeView')}
      />
    </SafeAreaView>
  )
}

export default Home
