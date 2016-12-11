// src/components/IndexPage.js
import React from 'react';
import ProductPreview from './ProductPreview';
import widgets from '../../mocks/data/widgets';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="product-selector">
          {widgets.map(productData => <ProductPreview key={productData.id} {...productData} />)}
        </div>
      </div>
    );
  }
}