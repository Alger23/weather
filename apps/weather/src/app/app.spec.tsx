import { render } from '@testing-library/react';
import {ThemeProvider} from "@emotion/react";
import App from './app';
import {defaultTheme} from "@seektop/ui";

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={defaultTheme.default}><App /></ThemeProvider>
    );

    expect(baseElement).toBeTruthy();
  });
});
