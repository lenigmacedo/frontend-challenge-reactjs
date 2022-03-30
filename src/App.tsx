import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './globalStyled';
import Router from './routes';
import { store } from './store';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
