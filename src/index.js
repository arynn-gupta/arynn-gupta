import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import ThreejsStyles from './styles/ThreejsStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThreejsStyles />
    <GlobalStyles />
    <Typography />
    <App />
  </>
);
