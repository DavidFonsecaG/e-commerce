import React from 'react';

// Styles
import '../../scss/mainCategoriePage.scss';

// Components
import ProductList from '../../components/product/ProductList';

const MainCategorieAPage = ({ categorie }) => {

  return (
    <div>
      <h1>{ categorie }</h1>
      <hr />
      <ProductList categorie={ categorie } />
    </div>
  )
}

export default MainCategorieAPage;
