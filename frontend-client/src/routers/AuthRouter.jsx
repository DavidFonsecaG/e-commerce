import { Routes, Route } from "react-router-dom";
import LoginPage from '../pages/login/LoginPage';
import LostPage from '../pages/404/LostPage';


const AuthRouter = () => {
  return (
    <>
      <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/*" element={<LostPage/>} />
        </Routes>
    </>
  );};

export default AuthRouter;
