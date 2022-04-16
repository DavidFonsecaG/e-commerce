import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/eComm';

// Styles
import '../../scss/productList.scss';

// Components
import ProductCard from './ProductCard';

const ProductList = ({ categorie }) => {
  
  const dispatch = useDispatch()
  const { products } = useSelector(state => state.eComm)

  useEffect(() => {
    dispatch( getProducts() )
  }, [dispatch])

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
