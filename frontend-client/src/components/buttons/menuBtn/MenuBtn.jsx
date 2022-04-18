import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Styles
import '../../../scss/menuBtn.scss';

// Componets
import ButtonIcon from '../ButtonIcon';
import Backdrop from '../../backdrop/Backdrop';

const MenuBtn = () => {

  // User
  const { name } = useSelector(state => state.auth);

  // Handeling Menu Button
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = (e) => {
    e.preventDefault();
    setMenuToggle(!menuToggle);
  };

  // Notifications Array
  const menuOptions = [
    {
      linkTo: '/',
      item: 'Home'
    },
    {
      linkTo: '/about-us',
      item: 'About Us'
    },
    {
      linkTo: '/store',
      item: 'Store'
    }
  ];

  return (

    <div className='menu-btn-wrapper'>

      <ButtonIcon
        className='menu-btn'
        iconName='menu'
        onClick={handleMenuToggle}
        classNameIcon='c-grey md-24'
      />

      {/* Dropdown - Menu */}
      {
        menuToggle && (
          <div className="dropdown-menu">

            {
              menuOptions.map(({ linkTo, item }) => {
                return (
                  <NavLink 
                    className="container-flex-row dropdown-menu-item"
                    to={linkTo}
                  >
                    <div className="wrapper-menu-item-body">
                      <span className="notification-box-text">{item}</span>
                    </div>
                  </NavLink>
                )
              })
            }

            {
              true && (
                <NavLink 
                  className="container-flex-row dropdown-menu-item" 
                  to={'/admin/dashboard'}
                >
                  <div className="wrapper-menu-item-body">
                    <span className="notification-box-text">Admin</span>
                  </div>
                </NavLink>
              )
            }

          </div>
        )
      }
      <Backdrop
        show={menuToggle}
        click={handleMenuToggle}
      />

    </div>
  )
}

export default MenuBtn