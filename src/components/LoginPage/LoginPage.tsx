import styles from '../../styles/common/formStyle'
import FireBaseApp from '../../firebase/FireBaseApp'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image, View } from 'react-native'
import { Link } from 'react-router-native'
import { Button, Input, Text } from 'react-native-elements'

const LoginPage = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const onLoginPress = () => FireBaseApp.signIn({ email, password })

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps="always"
        >
          <Image
            style={styles.logo}
            source={require('../../../assets/icon.png')}
          />
          <Input
            label="Email"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            leftIcon={{
              type: 'font-awesome',
              name: 'at',
            }}
          />
          <Input
            secureTextEntry
            label="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
          />
          <View style={{ alignItems: 'center' }}>
            <Button title="Log in" onPress={() => onLoginPress()} />
          </View>
          <View style={styles.footerView}>
            <Text>
              Don't have an account?{' '}
              <Link component={Text} style={styles.footerLink} to="/register">
                Sign up
              </Link>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  )
}

export default LoginPage
