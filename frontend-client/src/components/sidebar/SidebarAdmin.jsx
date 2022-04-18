import { NavLink } from 'react-router-dom';

// Styles
import '../../scss/sidebar.scss';

const SidebarAdmin = ({ handleLogout }) => {
  return (

    <aside className='container-admin-sidebar'>

      <nav>
        <ul className="sidebar-nav">

          <li>
            {/* <!-- Sidebar - Brand --> */}
            <p className="sidebar-nav-title">ADMIN</p>
          </li>

          {/* <!-- Divider --> */}
          <hr className="hr-sidebar" />

          {/* <!-- Nav Item - Dashboard --> */}
          <li>
            <NavLink
              className={({ isActive }) => 'sidebar-nav-item ' + (isActive ? 'current-page-admin' : '')}
              to="/admin/dashboard">
              <span className="material-icons">leaderboard</span>
              <p className="sidebar-nav-item-text">Dashboard</p>
            </NavLink>
          </li>

          {/* <!-- Divider --> */}
          <hr className="hr-sidebar" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">
            MANAGE
          </div>

          {/* <!-- Nav Item - categories --> */}
          <li>
            <NavLink
              className={({ isActive }) => 'sidebar-nav-item ' + (isActive ? 'current-page-admin' : '')}
              to="/admin/categories">
              <span className="material-icons">folder_copy</span>
              <p className="sidebar-nav-item-text">Categories</p>
            </NavLink>
          </li>

          {/* <!-- Nav Item - Prodcuts --> */}
          <li>
            <NavLink
              className={({ isActive }) => 'sidebar-nav-item ' + (isActive ? 'current-page-admin' : '')}
              to="/admin/products">
              <span className="material-icons">folder</span>
              <p className="sidebar-nav-item-text">Products</p>
            </NavLink>
          </li>

          {/* <!-- Divider --> */}
          <hr className="hr-sidebar" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">
            ADMIN
          </div>

          {/* <!-- Nav Item - Users --> */}
          <li>
            <NavLink
              className={({ isActive }) => 'sidebar-nav-item ' + (isActive ? 'current-page-admin' : '')}
              to="/admin/users">
              <span className="material-icons">people_alt</span>
              <p className="sidebar-nav-item-text">Users</p>
            </NavLink>
          </li>

          {/* <!-- Divider --> */}
          <hr className="hr-sidebar" />

          {/* <!-- Heading --> */}
          <div className="sidebar-heading">
            LINKS
          </div>

          {/* <!-- Nav Item - Store --> */}
          <li>
            <NavLink
              className='sidebar-nav-item'
              to="/store">
              <span className="material-icons">local_mall</span>
              <p className="sidebar-nav-item-text">Go to store</p>
            </NavLink>
          </li>

          {/* <!-- Divider --> */}
          <hr className="hr-sidebar" />

          {/* <!-- Sidebar Toggler (Sidebar) --> */}
          <div className="sidebar-textbox">

            <li className="sidebar-nav-item-2">
              <p className='sidebar-textbox-text'>Close Session</p>
            </li>

            <button
              className="btn-admin-sidebar"
              onClick={handleLogout}
            >Log out</button>

          </div>

        </ul>
      </nav>

    </aside>
  )
}

export default SidebarAdmin;
