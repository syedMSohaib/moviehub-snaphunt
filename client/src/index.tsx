import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './common-styles//bootstrap-grid.css';
import './common-styles/index.css';
import './common-styles/paddings-margins.css';
import Main from './components/Main';
import { store } from './store';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
