import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import ThreejsStyles from './styles/ThreejsStyle';

ReactDOM.render(
  <>
    <ThreejsStyles />
    <GlobalStyles />
    <Typography />
    <App />
  </>,
  document.getElementById('root'),
);
