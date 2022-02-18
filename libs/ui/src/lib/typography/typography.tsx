import React from "react";
import styled from '@emotion/styled';

export interface TypographyProps {
  children?: React.ReactNode;
}

const StyledTypography = styled.span`
  color: ${({theme}) => theme.font.color};
`;

export function Typography(props: TypographyProps) {
  return (
    <StyledTypography>
      {props.children}
    </StyledTypography>
  );
}

export default Typography;
