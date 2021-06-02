/** @jsxImportSource @emotion/react */
// eslint-disable-next-line
import { jsx, css, Global } from '@emotion/react'

const globalStyles = css`
  body {
    margin: 0;
    width: 100%;
    background-color: #000;
    overscroll-behavior: none;
    color: #fff;
    font-family: Monospace, serif;
    font-size: 14px;
    line-height: 24px;
  }
`

const GlobalStyles = () => {
  return <Global styles={globalStyles} />
}

export default GlobalStyles
