// src/components/ProductPage.js
import React from 'react';
import { Link } from 'react-router';
import ProductMenu from '../ProductMenu';
import ShippingType from '../ShippingType';
import StockItem from '../StockItem';
import Flag from '../Flag';
import widgets from '../../../mocks/data/widgets';

export default class ProductPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const product = widgets.filter((product) => product.id === id)[0];
    if (!product) {
      //return <NotFoundPage/>;
      return <span>Not FountM</span>;
    }
    const headerStyle = { backgroundImage: '{`url(/images/${product.cover})`}' };
    return (
      <div className="product-full">
        <ProductMenu/>
        <div className="product">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={`/images/${product.cover}`}/>
            <h2 className="name">{product.name}</h2>
          </div>
          <section className="description">
            Merchant is from <strong><Flag code={product.country} showName="true"/></strong>.
          </section>
          <section className="stock">
            <p>There are <strong>{product.stock.length}</strong> merchants selling this:</p>
            <ul>{
              product.stock.map((merchant, i) => <StockItem key={i} {...merchant}/>)
            }</ul>
          </section>
        </div>
        <div className="navigateBack">
          <Link to="/">« Back to the index</Link>
        </div>
      </div>
    );
  }
}