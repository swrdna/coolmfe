import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import MarketingApp from './components/MarketingApp'
import AuthApp from './components/AuthApp'
import ProductsApp from './components/ProductsApp'

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={MarketingApp} />
        <Route exact path="/pricing" component={MarketingApp} />
        <Route exact path="/signin" component={AuthApp} />
        <Route exact path="/signup" component={AuthApp} />
        <Route exact path="/products" component={ProductsApp} />
        <Route exact path="/products/:id" component={ProductsApp} />
      </Switch>
    </BrowserRouter>
  )
}
