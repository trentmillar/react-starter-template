// src/components/ProductPage.js
import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import ProductMenu from './ProductMenu';
import ShippingType from './ShippingType';
import Flag from './Flag';
import widgets from '../../mocks/data/widgets';

export default class ProductPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const product = products.filter((product) => product.id === id)[0];
    if (!product) {
      return <NotFoundPage/>;
    }
    const headerStyle = { backgroundImage: `url(/images/${product.cover})` };
    return (
      <div className="product-full">
        <ProductsMenu/>
        <div className="product">
          <header style={headerStyle}/>
          <div className="picture-container">
            <img src={'/images/${product.image}'}/>
            <h2 className="name">{product.name}</h2>
          </div>
          <section className="description">
            Merchant is from <strong><Flag code={product.country} showName="true"/></strong>.
          </section>
          <section className="shipping">
            <p>Winner of <strong>{product.shippingTypes.length}</strong> shipping:</p>
            <ul>{
              product.shippingTypes.map((shippingType, i) => <ShippingType key={i} {...shippingType}/>)
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