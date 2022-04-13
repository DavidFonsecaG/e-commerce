import React, { useMemo } from 'react';

// Styles
import '../../scss/productList.scss';

// Selectors
import {getProductsByCategorie} from '../../selectors/getProductsByCategorie';

// Components
import ProductCard from './ProductCard';

const ProductList = ({ categorie }) => {
  
  const products = useMemo(() => getProductsByCategorie(categorie), [categorie]);
  console.log(products)

  return (
    <div className="products-list">
      {
        products.map((product) => {
          return (
            <ProductCard key={product.id}  {...product} />
          )
        })
      }
    </div>
  )
}

export default ProductList;
