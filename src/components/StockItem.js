import React from 'react';

export default class StockItem extends React.Component {
  render() {
    return (
      <li className="stock">
        <span className={`symbol symbol-${this.props.type}`} title={this.props.merchant}>{this.props.type}</span>
        <span className="price">{this.props.price}</span>
        <span className="currency">{this.props.currency}</span>
        <span className="size">{this.props.size}</span>
        <span className="available">{this.props.available}</span>
      </li>
    );
  }
}