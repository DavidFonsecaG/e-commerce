import { NavLink } from 'react-router-dom';

// Styles
import '../../scss/dropdown.scss';


const Dropdown = ({array}) => {
  return (
    <>    
      <div className="dropdown-shoppingBag">

        {
          array.map(({ type, price, product, linkTo }) => {
            return (
              <NavLink className="container-flex-row dropdown-item" to={linkTo}>
                <div className="wrapper-circle-icon">
                  <div className={`icon-circle ${type.bg}`}>
                    <span className="material-icons md-18">{type.icon}</span>
                  </div>
                </div>
                <div className="wrapper-body-icon">
                  <span className="notification-box-text">{product}</span>
                  <div className="notification-box-date">{price}</div>
                </div>
              </NavLink>
            )
          })
        }

        <NavLink className="container-flex-row dropdown-item" to={'/cart'}>
          <p className="notification-box-date">See Shopping Bag</p>
        </NavLink>

      </div>
    </>
  )
}

export default Dropdown;
