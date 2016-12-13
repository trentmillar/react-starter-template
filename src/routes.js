// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/ProductLayout';
import IndexPage from './components/pages/IndexPage';
import ProductPage from './components/pages/ProductPage';
import NotFoundPage from './components/pages/NotFoundPage';
import ProductListPage from './components/pages/ProductListPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
      <Route path="products" component={ProductListPage}/>
      <Route path="product/:id" component={ProductPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;