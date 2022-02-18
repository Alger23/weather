import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface InputProps {
  name?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  color: pink;
`;

export const Input = (props: InputProps) =>
  <StyledInput type="text" {...props}/>;

export default Input;
