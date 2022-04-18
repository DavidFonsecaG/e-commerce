import { NavLink } from 'react-router-dom';

// Styles
import '../../../scss/dropdown.scss';


const Dropdown = ({array}) => {
  return (
    <>    
      <div className="dropdown-shoppingBag">

        {
          array.map(({ type, price, product, linkTo }) => {
            return (
              <NavLink className="container-flex-row dropdown-item" to={linkTo}>
                <div className="wrapper-item-img">
                  <div className={`item-img ${type.bg}`}>
                    <span className="material-icons-outlined md-24">{type.icon}</span>
                  </div>
                </div>
                <div className="wrapper-item-body">
                  <span className="item-body-text">{product}</span>
                  <div className="item-body-price">{price}</div>
                </div>
              </NavLink>
            )
          })
        }

        <NavLink className="container-flex-row dropdown-item" to={'/cart'}>
          <p className="item-body-price">See Shopping Bag</p>
        </NavLink>

      </div>
    </>
  )
}

export default Dropdown;
