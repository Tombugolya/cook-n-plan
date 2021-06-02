import React from 'react'
import FireBase from '../../firebase/FireBaseApp'

const MainPage = () => {
  return <h1>{JSON.stringify(FireBase.name)}</h1>
}

export default MainPage
