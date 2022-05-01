import React, { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

// Styles
import '../../scss/headers.scss';

// Componets
import MenuBtn from '../buttons/menuBtn/MenuBtn';

const Header = () => {

  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 50)
      );
    }
  }, []);

  return (
    <header className={`header ${small ? "small" : ""}`}>
      <div className="container container-90 container-1300 container-flex-row">

        <NavLink className="site-title" to="/">
          <div className="site-logo"></div>
          <h1 className="site-text">GO ESTUDIOS</h1>
        </NavLink>

        <div className='toggle-menu-wrapper'>
          <MenuBtn />
        </div>

        <nav className='site-nav-bar'>
          <ul className='nav-ul'>

            <li className='nav-li'>
              <NavLink className={
                ({ isActive }) => 'nav-a ' + (isActive ? 'current-page' : '')
              } to="/">INICIO</NavLink>
            </li>

            <li className='nav-li'>
              <NavLink className={
                ({ isActive }) => 'nav-a ' + (isActive ? 'current-page' : '')
              } to="/nosotros">NOSOTROS</NavLink>
            </li>
            
            <li className='nav-li'>
              <NavLink className={
                ({ isActive }) => 'nav-a ' + (isActive ? 'current-page' : '')
              } to="/contactanos">CONTACTO</NavLink>
            </li>

            <li className='nav-li'>
              <NavLink className={
                ({ isActive }) => 'nav-a ' + (isActive ? 'current-page' : '')
              } to="/blog">BLOG</NavLink>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header;
