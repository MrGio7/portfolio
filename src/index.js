import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import "./style/index.scss";

ReactDOM.render(
  <BrowserRouter basename='/portfolio'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);