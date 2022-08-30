import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './common-styles//bootstrap-grid.css';
import './common-styles/index.css';
import './common-styles/paddings-margins.css';
import Main from './components/Main';
import { store } from './store';
import { BrowserRouter } from "react-router-dom";
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          <Main />
        </QueryParamProvider>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
