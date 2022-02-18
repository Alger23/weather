import { render } from '@testing-library/react';

import Input from './input';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Input defaultValue={"sample"} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<Input value={"sample"} onChange={(e => e.target.value)} />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a sample as value', () => {
    const { getByDisplayValue } = render(<Input defaultValue={"sample"} />);

    expect(getByDisplayValue('sample')).toBeTruthy();
  });
});
