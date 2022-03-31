import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRouter from './PrivateRouter';
import AdminRouter from './AdminRouter';
import PublicRouter from './PublicRouter';
import FrontendRouter from './FrontendRouter';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/admin/*" element={
          <PrivateRouter>
            <AdminRouter/>
          </PrivateRouter>
        } />

        <Route path="/auth/*" element={
          <PublicRouter>
            <AuthRouter /> 
          </PublicRouter>
        } />

        <Route path="/*" element={
          <PublicRouter>
            <FrontendRouter />
          </PublicRouter>
        } />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
