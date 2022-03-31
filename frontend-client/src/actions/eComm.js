import axios from 'axios';
import { types } from '../types/types';

export const getProducts = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/product/list")
      .then(({ data }) => {
        dispatch(products(data))
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
};

export const products = (products) => {
  return ({
    type: types.eCommGetProducts,
    payload: {
      products
    }
  })
};

export const getCategories = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/categorie/list")
      .then(({ data }) => {
        dispatch(categories(data))
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
};

export const categories = (categories) => {
  return ({
    type: types.eCommGetCategories,
    payload: {
      categories
    }
  })
};

export const getUsers = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/user/list")
      .then(({ data }) => {
        console.log(data)
        dispatch(users(data))
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
};

export const users = (users) => {
  return ({
    type: types.eCommGetUsers,
    payload: {
      users
    }
  })
};
