import React from 'react'
import FireBaseApp from '../../firebase/FireBaseApp'
import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'react-router-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    fontSize: 32,
  },
  a: {
    fontSize: 16,
    color: '#2db6d9',
  },
})

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>{FireBaseApp.name}</Text>
      <Link to="/login">
        <Text style={styles.a}>Login</Text>
      </Link>
    </View>
  )
}

export default MainPage
