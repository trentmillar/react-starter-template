// src/components/ShippingType.js
import React from 'react';

const typeMap = {
  'post': 'Mailed',
  'delivery': 'Delivery available',
  'pickup': 'Pick-up at Merchant'
};

export default class ShippingType extends React.Component {
  render() {
    return (
      <li className="shipping">
        <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}>{this.props.type}</span>
        <span className="price">{this.props.price}</span>
        <span className="description"> {this.props.description}</span>
      </li>
    );
  }
}