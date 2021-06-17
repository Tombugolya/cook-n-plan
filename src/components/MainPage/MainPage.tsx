import React, { FC } from 'react'
import FireBaseApp from '../../firebase/FireBaseApp'
import { StyleSheet, View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { Link } from 'react-router-native'
import useFirebaseAuthentication from '../../hooks/useFireBaseAuthentication'

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

const MainPage: FC = () => {
  const user = useFirebaseAuthentication()
  const onSignOutPress = () => FireBaseApp.signOut()

  return user ? (
    <View style={styles.container}>
      <Text h1>{FireBaseApp.name}</Text>
      <View style={{ alignItems: 'center' }}>
        <Button title="Sign out" onPress={() => onSignOutPress()} />
      </View>
    </View>
  ) : (
    <View style={styles.container}>
      <Link component={Text} style={styles.a} to="/login">
        Login
      </Link>
    </View>
  )
}

export default MainPage
