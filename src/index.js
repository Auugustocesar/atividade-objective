import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'
import App from './App';
import { theme } from './Styles'
import "./css/reset.css"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<ThemeProvider theme={theme} >
  <App />
</ThemeProvider>
, document.getElementById('root'));

serviceWorker.unregister();
