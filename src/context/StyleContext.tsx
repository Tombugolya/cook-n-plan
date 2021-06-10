import React, { createContext, FC, ReactNode, useState } from 'react'
import { Theme, ThemeProvider } from 'react-native-elements'

const theme: Theme = {
  colors: {
    primary: '#6cc166',
    secondary: '#ecece4',
  },
  Button: {
    containerStyle: {
      width: 120,
    },
    title: 'Button!',
    raised: true,
  },
  Input: {
    leftIcon: {
      color: '#6cc166',
    },
  },
  Text: {
    style: {
      fontSize: 16,
      color: '#2e2e2d',
    },
  },
}
export const ThemeContext = createContext<TThemeContext>(null)
export const StyleContextProvider: TStyleContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  return (
    <ThemeProvider theme={theme} useDark={darkMode}>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  )
}

type TStyleContextProvider = FC<{ children: ReactNode }>
interface TThemeContext {
  darkMode: boolean
  setDarkMode: (val: boolean) => void
}
export default StyleContextProvider
