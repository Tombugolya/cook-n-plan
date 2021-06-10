import React from 'react'
import MainPage from './MainPage/MainPage'
import LoginPage from './LoginPage/LoginPage'
import RegisterPage from './RegisterPage/RegisterPage'
import { Switch, Route } from 'react-router-native'

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </React.Fragment>
  )
}

export default Routes
