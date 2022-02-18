import styled from '@emotion/styled';
import React from "react";

export interface ButtonProps {
  onClick?:(event: React.MouseEvent<HTMLButtonElement>)=>void;
  children?: React.ReactNode;
}

const StyledButton = styled.button`
  color: ${({theme})=> theme.font.color };
  cursor: pointer;
  &:hover {
    border-color: ${({theme})=>theme.button.hover.borderColor};
  }
`;

export function Button(props: ButtonProps) {

  return (
    <StyledButton type="button" {...props}>{props.children}</StyledButton>
  );
}

export default Button;
