import { useDispatch, useSelector } from 'react-redux';
import { ToggleOn, ToggleOff } from '../../actions/ui';
import AvatarBtn from '../avatarBtn/AvatarBtn';
import ButtonIcon from '../buttons/ButtonIcon'
import SearchFormAdmin from '../forms/SearchFormAdmin'
import NotificationBtn from '../notificationBtn/NotificationBtn';
import SearchFormBtn from '../searchFormBtn/SearchFormBtn';


const HeaderAdmin = ({ handleLogout }) => {

  // Handeling Sidebar Toggle
  const dispatch = useDispatch();
  const { toggle } = useSelector(state => state.ui);

  const handleToggleSidebar = (e) => {
    e.preventDefault();

    if (toggle) {
      dispatch(ToggleOff());
    } else {
      dispatch(ToggleOn());
    }
  };

  return (
    <header className='header-admin'>
      <div className="container">

        <nav className="container-flex-row">

          <div className='toggle-search-wrapper'>
            {/* Sidebar Toggle (Topbar)  */}
            <ButtonIcon
              className='btn-toggle'
              iconName='menu'
              onClick={handleToggleSidebar}
              classNameIcon='c-primary md-24'
            />

            {/* Topbar Search */}
            <SearchFormAdmin className='display-none-sx' />
          </div>

          <ul className='nav-ul-admin'>
            {/* Nav Item - Search Dropdown (Visible Only XS) */}
            <li className='nav-li-admin'>
              <SearchFormBtn />
            </li>

            {/* Nav Item - Alerts  */}
            <li className='nav-li-admin'>
              <NotificationBtn />
            </li>

            {/* Nav Item - Search Dropdown (Visible Only XS) */}
            <li className='nav-li-admin'>
              <AvatarBtn handleLogout={handleLogout} />
            </li>
          </ul>

        </nav>

      </div>
    </header>
  )
}

export default HeaderAdmin;
