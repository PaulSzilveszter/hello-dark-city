/*
  Functionality: renders the whole app to the root div in the index.html file

*/
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <App/>
);

