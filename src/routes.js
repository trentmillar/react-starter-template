// src/routes.js
import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/ProductLayout';
import IndexPage from './components/IndexPage';
import ProductPage from './components/ProductPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={IndexPage}/>
    <Route path="product/:id" component={ProductPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;