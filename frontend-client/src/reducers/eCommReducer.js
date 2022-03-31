import { types } from "../types/types";

const initialState = {
  products: [],
  categories: [],
  users: []
};

export const eCommReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.eCommGetProducts:
      return {
        ...state,
        products: action.payload.products
      }
    case types.eCommGetCategories:
      return {
        ...state,
        categories: action.payload.categories
      }
    case types.eCommGetUsers:
      return {
        ...state,
        users: action.payload.users
      }

    default:
      return state;
  }
};
