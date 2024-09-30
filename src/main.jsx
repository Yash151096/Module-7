import React from 'react';
import ReactDOM from 'react-dom';
import { store, ReduxProvider } from './redux/store';
import App from './App';

ReactDOM.render(
  <ReduxProvider>
    <App />
  </ReduxProvider>,
  document.getElementById('root')
);
