import React from 'react'
import FireBaseApp from '../../firebase/FireBaseApp'
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { UserCredentials } from '../../firebase/FireBaseApp'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCredentials>()
  const onSubmit: SubmitHandler<UserCredentials> = (data) =>
    FireBaseApp.signUp(data)
  const onErrors: SubmitErrorHandler<UserCredentials> = (data) =>
    console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit, onErrors)}>
      <input type="email" {...register('email', { required: true })} />
      {errors.email && <span>Fail</span>}
      <input
        type="password"
        autoComplete="on"
        {...register('password', { required: true })}
      />
      <input type="submit" />
    </form>
  )
}
export default Signup
