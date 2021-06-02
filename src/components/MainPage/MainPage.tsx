import React from 'react'
import FireBaseApp from '../../firebase/FireBaseApp'
import { StyleSheet, Text, View } from 'react-native'
import Signup from './Signup'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text>{FireBaseApp.name}</Text>
      <Signup />
    </View>
  )
}

export default MainPage
