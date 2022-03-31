import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const AvatarBtn = ({ handleLogout }) => {

  // User
  const { name } = useSelector(state => state.auth);
  // Handeling Avatar Button
  const [showDropdown, setShowDropdown] = useState(false);

  const handleShowDropdownBtn = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  // Notifications Array
  const dropdownOptions = [
    {
      linkTo: '/admin/profile',
      icon: 'person',
      item: 'Profile'
    },
    {
      linkTo: '/admin/settings',
      icon: 'settings',
      item: 'Settings'
    }
  ];

  return (

    <div className='avatar-btn-wrapper container-flex-row'>

      <div className='avatar-divider'></div>

      <h6 className="avatar-username-text">{ name }</h6>
      {/* <h6 className="avatar-username-text">David Fonseca</h6> */}

      <button
        className='avatar-btn container-flex-row'
        onClick={handleShowDropdownBtn}
      />

      {/* Dropdown - Avatar */}
      {
        showDropdown && (
          <div className="dropdown-avatar">

            {
              dropdownOptions.map(({ linkTo, icon, item }) => {
                return (
                  <NavLink className="container-flex-row dropdown-avatar-item" to={linkTo}>
                    <div className="wrapper-item-icon">
                      <span className="material-icons md-18 c-grey">{icon}</span>
                    </div>
                    <div className="wrapper-item-body">
                      <span className="notification-box-text">{item}</span>
                    </div>
                  </NavLink>
                )
              })
            }

            <button
              className='container-flex-row dropdown-avatar-item avatar-logout-btn'
              onClick={handleLogout}
            >

              <div className="wrapper-item-icon">
                <span className="material-icons md-18 c-grey">logout</span>
              </div>

              <div className="wrapper-item-body">
                <span className="notification-box-text">Logout</span>
              </div>

            </button>

          </div>
        )
      }

    </div>

  )
}

export default AvatarBtn;
