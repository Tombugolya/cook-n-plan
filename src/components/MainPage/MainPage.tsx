import React from 'react'
import FireBase from '../../firebase/FireBaseApp'
import Signup from './Signup'

const MainPage = () => {
  return (
    <div>
      <h1>{JSON.stringify(FireBase.name)}</h1>
      <Signup />
    </div>
  )
}

export default MainPage
