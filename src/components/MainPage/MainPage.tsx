import React from 'react'
import FireBaseApp from '../../firebase/FireBaseApp'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecece4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  a: {
    fontSize: 16,
    color: '#6cc166',
  },
})

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text h1>{FireBaseApp.name}</Text>
      <Link component={Text} style={styles.a} to="/login">
        Login
      </Link>
    </View>
  )
}

export default MainPage
