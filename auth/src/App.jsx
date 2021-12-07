import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'

export default ({ history }) => {
  return (
    <div className="container py-5">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  )
}
