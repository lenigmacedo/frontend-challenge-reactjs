import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './globalStyled';
import Router from './routes';
import { store } from './store';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <Router />
      </Provider>
    </BrowserRouter>
  );
};

export default App;
