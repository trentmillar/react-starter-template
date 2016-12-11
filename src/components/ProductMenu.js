// src/components/ProductMenu.js
import React from 'react';
import { Link } from 'react-router';
import widgets from '../../mocks/data/widgets';

export default class ProductMenu extends React.Component {
  render() {
    return (
      <nav className="product-menu">
        {widgets.map(menuProduct => {
          return <Link key={menuProduct.id} to={'/product/${menuProduct.id}'} activeClassName="active">
            {menuProduct.name}
          </Link>;
        })}
      </nav>
    );
  }
}