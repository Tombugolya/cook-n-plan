import Routes from './src/components/Routes'
import React from 'react'
import { NativeRouter } from 'react-router-native'

export default function App() {
  return (
    <NativeRouter>
      <Routes />
    </NativeRouter>
  )
}
