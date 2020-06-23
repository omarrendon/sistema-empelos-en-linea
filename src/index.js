import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme ({
  palette: {
    secondary: {
      main : '#0052d4'
    }
  }
});

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
