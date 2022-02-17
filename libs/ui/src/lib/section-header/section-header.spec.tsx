import { render } from '@testing-library/react';

import SectionHeader from './section-header';

describe('SectionHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SectionHeader value="section" />);
    expect(baseElement).toBeTruthy();
  });
});
