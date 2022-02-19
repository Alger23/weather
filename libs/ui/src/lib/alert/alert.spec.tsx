import {render} from '@testing-library/react';

import Alert from './alert';
import defaultTheme from "../../themes/defaultTheme";
import {ThemeProvider} from '@emotion/react';

describe('Alert', () => {
  it('should render successfully', () => {
    const {baseElement} = render(
      <ThemeProvider theme={defaultTheme}>
        <Alert severity="error"/>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
