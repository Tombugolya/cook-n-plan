import FireBaseApp from '../../firebase/FireBaseApp'
import styles from '../../styles/common/formStyle'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Image, View } from 'react-native'
import { Link } from 'react-router-native'
import { Button, Input, Text } from 'react-native-elements'

const RegisterPage = () => {
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Password don't match")
      return
    }
    FireBaseApp.signUp({ email, password, fullName })
  }

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
            label="Full Name"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            leftIcon={{
              type: 'font-awesome',
              name: 'user',
            }}
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
          <Input
            secureTextEntry
            label="Confirm Password"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            leftIcon={{ type: 'font-awesome', name: 'lock' }}
          />
          <View style={{ alignItems: 'center' }}>
            <Button title="Sign up" onPress={() => onRegisterPress()} />
          </View>
          <View style={styles.footerView}>
            <Text>
              Already got an account?{' '}
              <Link to="/login">
                <Text style={styles.footerLink}>Log in</Text>
              </Link>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  )
}

export default RegisterPage
