import Routes from './Routes'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes />
      </Router>
    </React.StrictMode>
  )
}

export default App
