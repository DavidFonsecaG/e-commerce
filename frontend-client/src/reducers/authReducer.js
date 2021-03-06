import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.username,
        rol: action.payload.rol,
        token: action.payload.token
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
