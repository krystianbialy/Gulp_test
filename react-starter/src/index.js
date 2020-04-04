import React from 'react';
import ReactDom from 'react-dom';
import { GlobalStyle } from './theme/global';
import { App } from './app.component';

const rootElement = document.querySelector('#root');

ReactDom.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  rootElement
);
