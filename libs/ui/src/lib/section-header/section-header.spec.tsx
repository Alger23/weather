import {render} from '@testing-library/react';
import {ThemeProvider} from "@emotion/react";
import SectionHeader from './section-header';
import defaultTheme from "../../themes/defaultTheme";

describe('SectionHeader', () => {
  it('should render successfully', () => {

    const {baseElement} = render(
      <ThemeProvider theme={defaultTheme}>
        <SectionHeader value="section"/>
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render section title', () => {
    const {getByText} = render(
      <ThemeProvider theme={defaultTheme}>
        <SectionHeader value="section"/>
      </ThemeProvider>
    );
    expect(getByText('section')).toBeTruthy();
  });
});
