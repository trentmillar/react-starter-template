// src/components/ProductPreview.js
import React from 'react';
import { Link } from 'react-router';

export default class ProductPreview extends React.Component {
  render() {
    return (
      <Link to={`/prduct/${this.props.id}`}>
        <div className="product-preview">
          <img src={`images/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="shipping-count"><img src="/images/TODO.png"/> {this.props.shippingTypes.length}</span>
        </div>
      </Link>
    );
  }
}