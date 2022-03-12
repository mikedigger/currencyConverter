import './destyle.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// import ExchangeService from './services/exchangeServise';
// const exchangeAPI = new ExchangeService();


// exchangeAPI.getResource('USD', 'GBP')
//     .then(res => console.log(res))

ReactDOM.render(
  // <div>Hello</div>,
  <App />,
  document.getElementById('root')
);
