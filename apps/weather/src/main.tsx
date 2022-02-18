import "normalize.css";
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import {ThemeProvider} from "@emotion/react";
import {darkTheme} from "@seektop/ui";
import {defaultTheme} from "@seektop/ui";

import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme.default}>
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
