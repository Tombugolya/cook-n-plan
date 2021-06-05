import React, { createContext, FC, ReactNode, useState } from 'react'

type TStyleContextProvider = FC<{ children: ReactNode }>
interface StyleState {
  colors: {
    primary: string
    secondary: string
  }
}
interface TStyleContext {
  style: StyleState
  setStyle: (val: StyleState) => void
}

export const StyleContext = createContext<TStyleContext>(null)

export const StyleContextProvider: TStyleContextProvider = ({ children }) => {
  const [style, setStyle] = useState<StyleState>({
    colors: {
      primary: '#6cc166',
      secondary: '#ecece4',
    },
  })
  return (
    <StyleContext.Provider
      value={{
        style,
        setStyle,
      }}
    >
      {children}
    </StyleContext.Provider>
  )
}

export default StyleContextProvider
