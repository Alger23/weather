import "normalize.css";
import {StrictMode} from 'react';
import * as ReactDOM from 'react-dom';
import {ThemeProvider} from "@emotion/react";
//import {darkTheme} from "@seektop/ui";
import {defaultTheme} from "@seektop/ui";

import App from './app/app';
import {Provider} from "react-redux";
import store from "./_redux/store";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme.default}>
        <App/>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
