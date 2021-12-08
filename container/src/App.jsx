import React, { lazy, Suspense } from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Header from './components/Header'

const MarketingAppLazy = lazy(() => import('./components/MarketingApp'))
const AuthAppLazy = lazy(() => import('./components/AuthApp'))
const ProductsAppLazy = lazy(() => import('./components/ProductsApp'))

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="p-5 text-center">Loading...</div>}>
        <Switch>
          <Route exact path="/" component={MarketingAppLazy} />
          <Route exact path="/pricing" component={MarketingAppLazy} />
          <Route exact path="/signin" component={AuthAppLazy} />
          <Route exact path="/signup" component={AuthAppLazy} />
          <Route exact path="/products" component={ProductsAppLazy} />
          <Route exact path="/products/:id" component={ProductsAppLazy} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
