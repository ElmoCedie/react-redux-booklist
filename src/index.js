import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from './components/App';

import reducers from "./reducers";
import './style/style.css';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <div id="main-content" className="container">
      <App />
    </div>
  </Provider>
  , document.getElementById('root'));
