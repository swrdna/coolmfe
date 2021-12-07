import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

export default ({ history }) => {
  return (
    <div className="container py-5">
      <Router history={history}>
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/products/:id" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  )
}
