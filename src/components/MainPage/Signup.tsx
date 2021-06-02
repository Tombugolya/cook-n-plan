import React from 'react'
import FireBaseApp from '../../firebase/FireBaseApp'
import {
  SubmitErrorHandler,
  SubmitHandler,
  Controller,
  useForm,
} from 'react-hook-form'
import { UserCredentials } from '../../firebase/FireBaseApp'
import { Text, Button, TextInput, View } from 'react-native'

const Signup = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<UserCredentials>()
  const onSubmit: SubmitHandler<UserCredentials> = (data) =>
    FireBaseApp.signUp(data)
  const onErrors: SubmitErrorHandler<UserCredentials> = (data) =>
    console.log(data)
  return (
    <View>
      <Controller
        control={control}
        defaultValue="example@test.com"
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      {errors.email && <Text>This is required.</Text>}
      <Controller
        control={control}
        defaultValue=""
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={true}
          />
        )}
        name="password"
        rules={{ required: true }}
      />
      {errors.password && <Text>This is required.</Text>}
      <View>
        <Button title="Sign Up" onPress={handleSubmit(onSubmit, onErrors)} />
      </View>
    </View>
  )
}
export default Signup
