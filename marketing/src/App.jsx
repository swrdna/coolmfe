import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import Landing from './components/Landing'
import Pricing from './components/Pricing'

export default ({ history }) => {
  return (
    <div className="container py-5">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/pricing" component={Pricing} />
        </Switch>
      </Router>
    </div>
  )
}
