import { NavLink } from 'react-router-dom';

// Componets
import MenuBtn from '../menuBtn/MenuBtn';
import ShoppingBagBtn from '../shoppingBagBtn/ShoppingBagBtn';

const Header = () => {

  return (
    <header className='header'>
      <div className="container container-flex-row">

        <div className='shoppingBag-wrapper'>
          <ShoppingBagBtn/>
        </div>

        <div className="site-title">
          <h1>Living the social life</h1>
        </div>

        <div className='toggle-menu-wrapper'>
          <MenuBtn />
        </div>


        <nav className='site-nav-bar'>
          <ul className='nav-ul'>

            <li className='nav-li'>
              <NavLink className={
                ({ isActive }) => 'nav-a ' + (isActive ? 'current-page' : '')
              } to="/">Home</NavLink>
            </li>

            <li className='nav-li'>
              <NavLink className={
                ({ isActive }) => 'nav-a ' + (isActive ? 'current-page' : '')
              } to="/about-us">About Us</NavLink>
            </li>

            <li className='nav-li'>
              <NavLink className={
                ({ isActive }) => 'nav-a ' + (isActive ? 'current-page' : '')
              } to="/store">Store</NavLink>
            </li>

            <li className='nav-li'>
              <NavLink className={
                ({ isActive }) => 'nav-a ' + (isActive ? 'current-page' : '')
              } to="/admin">Admin</NavLink>
            </li>

          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header;
