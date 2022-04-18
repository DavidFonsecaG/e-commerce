import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { startLogout } from '../actions/auth';

// Components
import HeaderAdmin from '../components/headers/HeaderAdmin';
import SidebarAdmin from '../components/sidebar/SidebarAdmin';
import DashboardPage from '../pages/admin/DashboardPage';
import CategoriesPage from '../pages/admin/CategoriesPage';
import ProductsPage from '../pages/admin/ProductsPage';
import UsersPage from '../pages/admin/UsersPage';
import LostPage from '../pages/404/LostPage';


const AdminRouter = () => {

  const dispatch = useDispatch();
  const { toggle } = useSelector(state => state.ui);

  // Handeling Logout
  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className='container-admin container-flex-row'>

      {
        toggle && (
          <SidebarAdmin handleLogout={handleLogout} />
        )
      }

      <main className='container-admin-main'>
        <HeaderAdmin handleLogout={handleLogout} />

        <div className='main-wrapper'>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/*" element={<LostPage />} />
          </Routes>
        </div>

        {/* <Footer/> */}
      </main>

    </div>
  );
};

export default AdminRouter;
