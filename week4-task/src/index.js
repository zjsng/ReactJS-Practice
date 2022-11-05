require('file-loader?name=[name].[ext]!./index.html');
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from './Store';

import App from './App';

import "./Index.css"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>
);