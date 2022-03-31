import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from "./routers/AppRouter";
import './scss/app.scss'

const App = () => {
  return (
    <Provider store={ store }>
      <AppRouter/>
    </Provider>
  );
};

export default App;
