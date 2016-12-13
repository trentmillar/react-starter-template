import React from 'react';
import { Link } from 'react-router';

export default class ProductPreview extends React.Component {
  render() {
    return (
      <Link to={`/product/${this.props.id}`}>
        <div className="product-preview">
          <img src={`images/${this.props.image}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="stock-count">Stock {this.props.stock.length}</span>
        </div>
      </Link>
    );
  }
}