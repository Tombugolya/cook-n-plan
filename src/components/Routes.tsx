import React from 'react'
import MainPage from './MainPage/MainPage'
import GlobalStyles from '../style/GlobalStyles'
import { Switch, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
      <GlobalStyles />
    </React.Fragment>
  )
}

export default Routes
