import { Routes, Route } from "react-router-dom";

// Componenets
import Header from '../components/headers/Header';
import Footer from '../components/footer/Footer';

// Pages
import HomePage from '../pages/home/HomePage';
import TeamPage from '../pages/team/TeamPage';
import StorePage from '../pages/store/StorePage';
import ProductPage from '../pages/store/ProductPage';
import CartPage from '../pages/store/CartPage';
import LostPage from '../pages/404/LostPage';

const FrontendRouter = () => {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/home' element={<HomePage/>} />
          <Route path='/about-us' element={<TeamPage/>} />
          <Route path='/store' element={<StorePage/>} />
          <Route path='/product/:productId' element={<ProductPage/>} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/*' element={<LostPage/>} />
        </Routes>
      <Footer/>
    </>
  );
};

export default FrontendRouter;
