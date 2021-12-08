import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'

export default ({ history, onSignIn }) => {
  return (
    <div className="container py-5">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin">
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route exact path="/signup">
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
