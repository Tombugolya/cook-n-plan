import React from 'react'
import MainPage from './MainPage/MainPage'
import { Switch, Route } from 'react-router-native'

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default Routes
