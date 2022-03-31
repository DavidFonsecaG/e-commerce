import React, { useState } from 'react';

// Styles
import '../../scss/shoppingBagBtn.scss';

// Componets
import ButtonIcon from '../buttons/ButtonIcon';
import Dropdown from './Dropdown';
import Backdrop from '../backdrop/Backdrop';

const ShoppingBagBtn = () => {

  // Handeling shopping bag Button
  const [shoppingbagToggle, setShoppingbagToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setShoppingbagToggle(!shoppingbagToggle);
  }

  // Shopping Bag Array
  const shoppingBag = [
    {
      type: { icon: 'description', bg: 'bg-primary' },
      price: '$ 9,99',
      product: 'T-Shirt Logo Brand',
      linkTo: '/product/aaa'
    },
    {
      type: { icon: 'paid', bg: 'bg-secondary' },
      price: '$99,99',
      product: 'Airpods Max 3',
      linkTo: '/product/bbb'
    },
    {
      type: { icon: 'warning', bg: 'bg-warning' },
      price: '$999,99',
      product: 'MacBook Pro Max',
      linkTo: '/product/ccc'
    }
  ];

  let lenght = shoppingBag.length;

  return (

    <div className='shoppingBag-icon-wrapper'>

      <ButtonIcon
        className='shoppingBag-btn'
        iconName='shopping_bag'
        onClick={handleToggle}
        classNameIcon='c-grey md-24'
      />
      {/* Badge */}
      <span className="badge badge-counter badge-danger">{lenght}+</span>

      {/* Dropdown */}
      {
        shoppingbagToggle && (
          <Dropdown
            array={shoppingBag}
          />
        )
      }
      <Backdrop 
        show={shoppingbagToggle}
        click={handleToggle}
      />

    </div>

  )
};

export default ShoppingBagBtn;
