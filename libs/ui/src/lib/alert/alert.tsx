import styled from '@emotion/styled';
import defaultTheme from "../../themes/defaultTheme";
import {css} from "@emotion/react";
import React from "react";

type Theme = typeof defaultTheme;

interface ThemeProps {
  theme: Theme
}

interface SeverityProps {
  //嚴重性: error, warning, info, success
  severity: 'error'| 'warning'| 'info'| 'success',
}
const severityStyle = ({severity, theme}:  SeverityProps & ThemeProps)=>{
  return css`background-color: ${theme.alert[severity]};`
};

interface TextAlignProps {
  textAlign?: 'center'|'left'|'right'|'justify',
}

const textAlignStyle = ({textAlign}:  TextAlignProps & ThemeProps)=>{
  return css`text-align: ${textAlign || 'left'};`
};

export interface AlertProps {
  //嚴重性: error, warning, info, success
  severity: 'error'| 'warning'| 'info'| 'success',
  textAlign?: 'center'|'left'|'right'|'justify',
  children?: React.ReactNode,
}

const StyledAlert = styled.div<SeverityProps & TextAlignProps >`
  ${severityStyle};
  ${textAlignStyle};
  margin-top: 1rem;;
  padding: 1rem 1rem;
`;

export function Alert({children, ...props}: AlertProps) {
  return (
    <StyledAlert {...props}>
      {children}
    </StyledAlert>
  );
}

export default Alert;
