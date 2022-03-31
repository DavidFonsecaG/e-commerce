import React from 'react';

// Styles
import '../../scss/storePage.scss';

// Components
import ProductList from '../../components/product/ProductList';

const StorePage = () => {
  return (
    <div>
      <h2>Store Page</h2>
      <div>
        <ProductList categorie='Belts'/>
      </div>
    </div>
  )
};

export default StorePage;
