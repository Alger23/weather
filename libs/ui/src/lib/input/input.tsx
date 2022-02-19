import styled from '@emotion/styled';
import React from "react";

/* eslint-disable-next-line */
export interface InputProps {
  name?: string;
  defaultValue?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input`
  color: ${({theme}) => theme.font.color};
`;

export const Input = (props: InputProps) =>
  <StyledInput type="text" {...props}/>;

export default Input;
