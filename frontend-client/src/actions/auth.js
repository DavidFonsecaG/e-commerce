import axios from 'axios';
import { types } from '../types/types';
import { finishLoading, startLoading } from "./ui";

export const startLoginWithEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading())
    axios
      .post("http://localhost:4000/api/user/login", {
        email,
        password
      })
      .then((response) => {
        return response.data
      })
      .then(({ checkUser, tokenReturn }) => {
        dispatch(login(checkUser._id, checkUser.name, checkUser.rol, tokenReturn));
        dispatch(finishLoading());
      })
      .catch((err) => {
        console.log(err);
        dispatch(finishLoading());
        return err;
      });
  }
};

export const login = (uid, username, rol, token) => {
  return ({
    type: types.login,
    payload: {
      uid,
      username,
      rol,
      token
    }
  });
};

export const startLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  }
};

export const logout = () => {
  return ({
    type: types.logout,
  });
};
