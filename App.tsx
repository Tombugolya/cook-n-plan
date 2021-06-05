import Routes from './src/components/Routes'
import StyleContextProvider from './src/context/StyleContext'
import React from 'react'
import { NativeRouter } from 'react-router-native'

export default function App() {
  return (
    <NativeRouter>
      <StyleContextProvider>
        <Routes />
      </StyleContextProvider>
    </NativeRouter>
  )
}
